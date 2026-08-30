#!/usr/bin/env python3
"""
Phase A (kurashi-ec.jp): 暮らしのデザインから商品画像を収集し manifest.json を出力する。

【出力】
  data/kurashi/manifest.json
  public/images/products/{product_id}/01.jpg ...

【設定】
  data/kurashi/config.json

【実行例】
  python scripts/kurashi_fetch.py
  python scripts/kurashi_fetch.py --max-products 8
  python scripts/kurashi_fetch.py --config data/kurashi/config.json
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from html import unescape
from pathlib import Path
from threading import Lock
from urllib.parse import urljoin, urlparse

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DEFAULT_CONFIG_PATH = PROJECT_ROOT / "data" / "kurashi" / "config.json"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

JST = timezone(timedelta(hours=9))
print_lock = Lock()

SUBCATEGORY_SLUG_RE = re.compile(
    r"^(?:"
    r"\d+p-dining-table-chair-set|"
    r"dining-table-(?:chair|sofa|bench)-type-set|"
    r"tv-board-(?:high|low)|"
    r"(?:single|semi-double|double|queen|king)-bed|"
    r"bed-guard|bed-frame|"
    r"ceiling-lights|pendant-lights|floor-lights|desk-lights|"
    r"book-shelves|cabinet|collection-case|sideboard|tv-board|"
    r"\d+-?\d*cm_rug|rug-carpet|"
    r"living-room-sofa|3p-sofa|2p-sofa|"
    r"dining-dining-(?:table|chair|bench|sofa|stool)|"
    r"dining-table-chair-set|2p-dining-table-chair-set|4p-dining-table-chair-set|"
    r"6p-dining-table-chair-set|dining-table-(?:chair|sofa|bench)-type-set"
    r")$",
    re.I,
)
PRODUCT_LIST_LINK_RE = re.compile(
    r'fs-c-productListItem__imageContainer[\s\S]*?href="(/c/[^"]+)"',
    re.I,
)


@dataclass
class Config:
    base_url: str = "https://www.kurashi-ec.jp"
    category_urls: list[str] = field(default_factory=list)
    max_products: int = 8
    max_images_per_product: int = 8
    request_interval_sec: float = 1.0
    concurrency: int = 3
    default_category_slug: str = "table"
    manifest_path: Path = field(
        default_factory=lambda: PROJECT_ROOT / "data" / "kurashi" / "manifest.json"
    )
    images_dir: Path = field(
        default_factory=lambda: PROJECT_ROOT / "public" / "images" / "products"
    )
    images_web_path: str = "/images/products"
    image_cdn_host: str = "kurashiec202009.itembox.cloud"


def log(msg: str) -> None:
    with print_lock:
        print(msg, flush=True)


def resolve_project_path(raw_path: str | Path) -> Path:
    path = Path(raw_path)
    if path.is_absolute():
        return path
    return PROJECT_ROOT / path


def load_config(path: Path) -> Config:
    raw = {}
    if path.is_file():
        raw = json.loads(path.read_text(encoding="utf-8"))

    category_urls = raw.get("categoryUrls") or []
    if not category_urls and raw.get("categoryUrl"):
        category_urls = [raw["categoryUrl"]]

    manifest_path = resolve_project_path(
        raw.get("manifestPath", "data/kurashi/manifest.json")
    )
    if manifest_path.suffix != ".json":
        manifest_path = manifest_path / "manifest.json"

    return Config(
        base_url=raw.get("baseUrl", "https://www.kurashi-ec.jp").rstrip("/"),
        category_urls=category_urls,
        max_products=int(raw.get("maxProducts", 8)),
        max_images_per_product=int(raw.get("maxImagesPerProduct", 8)),
        request_interval_sec=float(raw.get("requestIntervalSec", 1.0)),
        concurrency=max(1, int(raw.get("concurrency", 3))),
        default_category_slug=raw.get("defaultCategorySlug", "table"),
        manifest_path=manifest_path,
        images_dir=resolve_project_path(raw.get("imagesDir", "public/images/products")),
        images_web_path=raw.get("imagesWebPath", "/images/products").rstrip("/"),
        image_cdn_host=raw.get("imageCdnHost", "kurashiec202009.itembox.cloud"),
    )


def sanitize_dirname(name: str) -> str:
    name = re.sub(r'[\\/:*?"<>|]', "_", name)
    return name.strip() or "unknown"


def normalize_url(base: str, href: str) -> str:
    url = urljoin(base, href)
    return url.split("?")[0].split("#")[0].rstrip("/") + "/"


def fetch_html(url: str) -> str:
    res = requests.get(
        url,
        headers={"User-Agent": USER_AGENT, "Referer": url},
        timeout=30,
    )
    res.raise_for_status()
    return unescape(res.text)


def is_product_href(href: str) -> bool:
    path = urlparse(href).path if href.startswith("http") else href
    parts = [p for p in path.split("/") if p]
    if len(parts) < 4 or parts[0] != "c":
        return False
    slug = parts[-1]
    if SUBCATEGORY_SLUG_RE.match(slug):
        return False
    if re.search(r"\d", slug) or slug.endswith(("set", "p")):
        return True
    if re.match(r"^[a-z]{2,4}-[a-z0-9-]+$", slug, re.I):
        return True
    return False


def extract_product_urls(html: str, base_url: str) -> list[str]:
    urls: list[str] = []
    seen: set[str] = set()

    hrefs = PRODUCT_LIST_LINK_RE.findall(html)
    if not hrefs:
        hrefs = [h for h in re.findall(r'href="([^"]+)"', html) if is_product_href(h)]

    for href in hrefs:
        if not is_product_href(href):
            continue
        url = normalize_url(base_url, href)
        if url not in seen:
            seen.add(url)
            urls.append(url)
    return urls


def category_page_url(base_category: str, page: int) -> str:
    base = base_category.rstrip("/") + "/"
    if page <= 1:
        return base
    return f"{base}?page={page}&sort=priority"


def collect_product_urls(cfg: Config) -> list[dict]:
    products: list[dict] = []
    seen: set[str] = set()

    for category_url in cfg.category_urls:
        for page in range(1, 21):
            if len(products) >= cfg.max_products:
                break
            page_url = category_page_url(category_url, page)
            try:
                html = fetch_html(page_url)
            except requests.RequestException as exc:
                log(f"  カテゴリ取得失敗 ({page_url}): {exc}")
                break

            page_urls = extract_product_urls(html, cfg.base_url)
            if not page_urls:
                break

            added = 0
            for url in page_urls:
                if url in seen:
                    continue
                seen.add(url)
                slug = url.rstrip("/").split("/")[-1]
                products.append({
                    "id": slug,
                    "itemUrl": url,
                    "rank": len(products) + 1,
                })
                added += 1
                if len(products) >= cfg.max_products:
                    break

            log(f"  カテゴリ {page_url} → +{added}件（累計 {len(products)}件）")
            if added == 0:
                break
            time.sleep(cfg.request_interval_sec)

    return products[: cfg.max_products]


def parse_title(html: str) -> str:
    match = re.search(r"<title>([^<]+)</title>", html, re.I)
    if not match:
        return ""
    title = match.group(1).strip()
    title = re.sub(r"\s*[|｜-].*$", "", title).strip()
    return title


def parse_price(html: str) -> int:
    patterns = [
        r'itemprop="price"\s+content="(\d+)"',
        r'class="[^"]*fs-c-productPrice[^"]*"[^>]*>[\s\S]*?(\d{1,3}(?:,\d{3})*)',
        r'data-price="(\d+)"',
    ]
    for pattern in patterns:
        match = re.search(pattern, html, re.I)
        if match:
            return int(match.group(1).replace(",", ""))

    candidates = [
        int(v.replace(",", ""))
        for v in re.findall(r"(\d{1,3}(?:,\d{3})*)\s*円", html)
        if int(v.replace(",", "")) >= 3000
    ]
    return max(candidates) if candidates else 0


def extract_product_image_id(html: str, cdn_host: str) -> str | None:
    og = re.search(r'property="og:image"\s+content="([^"]+)"', html, re.I)
    if og:
        match = re.search(r"/(\d{12})-\d+\.jpg", og.group(1))
        if match:
            return match.group(1)

    for url in re.findall(rf"https://{re.escape(cdn_host)}/product/[^\s\"'<>]+", html, re.I):
        match = re.search(r"/(\d{12})-\d+\.jpg", url)
        if match:
            return match.group(1)
    return None


def extract_ordered_image_urls(html: str, cfg: Config) -> list[str]:
    image_id = extract_product_image_id(html, cfg.image_cdn_host)
    if not image_id:
        return []

    pattern = rf"https://{re.escape(cfg.image_cdn_host)}/product/[^\s\"'<>]+/{image_id}-\d+\.jpg[^\"'<>]*"
    found = re.findall(pattern, html, re.I)

    ordered: list[str] = []
    seen: set[str] = set()
    for raw in found:
        base = re.sub(r"\?.*", "", raw)
        if base in seen:
            continue
        seen.add(base)
        ordered.append(base)

    ordered.sort(key=lambda u: int(re.search(r"-(\d+)\.jpg$", u).group(1)))
    return ordered[: cfg.max_images_per_product]


def shorten_product_name(name: str, max_chars: int = 36) -> str:
    cleaned = name.strip()
    cleaned = re.sub(r"【[^】]*】", " ", cleaned)
    cleaned = re.sub(r"\s+[A-Z]{2,}\d{3,}\s*$", "", cleaned, flags=re.I)
    cleaned = re.sub(r"[：:][^：:]*$", "", cleaned).strip()
    cleaned = re.sub(r"\s+", " ", cleaned)
    if len(cleaned) <= max_chars:
        return cleaned or name

    key_terms = (
        "ダイニング", "テーブル", "チェア", "ソファ", "ベンチ", "セット",
        "ワゴン", "本棚", "ラック", "シェルフ", "ベッド", "収納",
    )
    picked: list[str] = []
    for word in cleaned.split():
        candidate = " ".join([*picked, word])
        if len(candidate) > max_chars and picked:
            break
        picked.append(word)
        if len(picked) >= 5:
            break
    return " ".join(picked) if picked else cleaned[:max_chars]


def guess_extension(url: str, content_type: str | None) -> str:
    path = urlparse(url).path.lower()
    for ext in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
        if path.endswith(ext):
            return ext
    if content_type:
        if "jpeg" in content_type:
            return ".jpg"
        if "png" in content_type:
            return ".png"
        if "webp" in content_type:
            return ".webp"
    return ".jpg"


def download_image(url: str, save_path: Path, referer: str) -> Path:
    if save_path.exists() and save_path.stat().st_size > 0:
        return save_path

    res = requests.get(
        url,
        headers={"User-Agent": USER_AGENT, "Referer": referer},
        timeout=30,
    )
    res.raise_for_status()
    ext = guess_extension(url, res.headers.get("Content-Type"))
    if save_path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        save_path = save_path.with_suffix(ext)
    save_path.parent.mkdir(parents=True, exist_ok=True)
    save_path.write_bytes(res.content)
    return save_path


def enrich_product(cfg: Config, product: dict) -> dict:
    html = fetch_html(product["itemUrl"])
    name = parse_title(html)
    price = parse_price(html)
    image_urls = extract_ordered_image_urls(html, cfg)
    image_id = extract_product_image_id(html, cfg.image_cdn_host)

    product["name"] = name
    product["price"] = price
    product["imageUrls"] = image_urls
    product["itemCode"] = f"kurashi:{image_id or product['id']}"
    return product


def process_product(cfg: Config, product: dict) -> dict:
    product_id = sanitize_dirname(product["id"])
    name = shorten_product_name(product.get("name") or product_id)
    source_urls = product.get("imageUrls") or []

    if not source_urls:
        raise ValueError("画像 URL が見つかりません")

    image_dir = cfg.images_dir / product_id
    saved_paths: list[str] = []
    saved_sources: list[str] = []

    for index, url in enumerate(source_urls, start=1):
        target = image_dir / f"{index:02d}"
        try:
            saved = download_image(url, target, product["itemUrl"])
            web_path = f"{cfg.images_web_path}/{product_id}/{saved.name}"
            saved_paths.append(web_path)
            saved_sources.append(url)
            ec_num = re.search(r"-(\d+)\.jpg$", url)
            suffix = ec_num.group(1) if ec_num else str(index)
            log(f"    [{product_id}] 保存: {saved.name} (EC -{suffix})")
        except requests.RequestException as exc:
            log(f"    [{product_id}] 画像{index}失敗: {exc}")

    if not saved_paths:
        raise ValueError("画像の保存にすべて失敗しました")

    return {
        "id": product_id,
        "name": name,
        "price": int(product.get("price") or 0),
        "categorySlug": cfg.default_category_slug,
        "itemUrl": product.get("itemUrl", ""),
        "itemCode": product.get("itemCode", product_id),
        "rank": product.get("rank"),
        "images": saved_paths,
        "sourceUrls": saved_sources,
    }


def write_manifest(cfg: Config, products: list[dict]) -> Path:
    manifest = {
        "generatedAt": datetime.now(JST).isoformat(),
        "source": {
            "site": "kurashi-ec.jp",
            "baseUrl": cfg.base_url,
            "categoryUrls": cfg.category_urls,
        },
        "products": products,
    }
    cfg.manifest_path.parent.mkdir(parents=True, exist_ok=True)
    cfg.manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return cfg.manifest_path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="kurashi-ec.jp 商品画像収集 + manifest 生成")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG_PATH, help="設定 JSON")
    parser.add_argument("--max-products", type=int, help="取得商品数上書き")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config_path = args.config
    if not config_path.is_absolute():
        config_path = PROJECT_ROOT / config_path

    cfg = load_config(config_path)
    if args.max_products:
        cfg.max_products = args.max_products

    if not cfg.category_urls:
        print("エラー: categoryUrls が設定されていません")
        sys.exit(1)

    cfg.images_dir.mkdir(parents=True, exist_ok=True)

    log("=== kurashi-ec.jp 画像収集 (nookinterior) ===")
    log(f"baseUrl        : {cfg.base_url}")
    log(f"maxProducts    : {cfg.max_products}")
    log(f"maxImages/prod : {cfg.max_images_per_product}")
    log(f"concurrency    : {cfg.concurrency}")
    log(f"manifest       : {cfg.manifest_path}")
    log(f"imagesDir      : {cfg.images_dir}")

    product_stubs = collect_product_urls(cfg)
    if not product_stubs:
        log("商品が見つかりませんでした。")
        sys.exit(1)

    log(f"\n商品メタデータ取得 ({len(product_stubs)} 件)...")
    products: list[dict] = []
    for index, stub in enumerate(product_stubs, start=1):
        if index > 1:
            time.sleep(cfg.request_interval_sec)
        try:
            products.append(enrich_product(cfg, stub))
            log(f"  [{stub['id']}] {stub.get('name', '')[:50]} ({len(stub.get('imageUrls', []))}枚)")
        except Exception as exc:  # noqa: BLE001
            log(f"  [{stub['id']}] メタデータ取得失敗: {exc}")

    if not products:
        log("処理可能な商品がありませんでした。")
        sys.exit(1)

    log(f"\n画像ダウンロード開始 ({len(products)} 件)...")
    manifest_products: list[dict] = []
    failures: list[str] = []

    with ThreadPoolExecutor(max_workers=cfg.concurrency) as executor:
        futures = {executor.submit(process_product, cfg, product): product for product in products}
        for future in as_completed(futures):
            product = futures[future]
            try:
                result = future.result()
                manifest_products.append(result)
                log(
                    f"[完了] {result['id']} "
                    f"({len(result['images'])}枚) {result['name'][:50]}"
                )
            except Exception as exc:  # noqa: BLE001
                failures.append(product.get("id", "unknown"))
                log(f"[失敗] {product.get('id')}: {exc}")

    manifest_products.sort(key=lambda p: (p.get("rank") is None, p.get("rank") or 9999, p["id"]))
    manifest_path = write_manifest(cfg, manifest_products)

    total_images = sum(len(p["images"]) for p in manifest_products)
    avg_images = total_images / len(manifest_products) if manifest_products else 0

    log("\n=== Phase A 完了 (kurashi) ===")
    log(f"商品数     : {len(manifest_products)} / {cfg.max_products}")
    log(f"画像合計   : {total_images} 枚")
    log(f"平均枚数   : {avg_images:.1f} 枚/商品")
    log(f"失敗       : {len(failures)} 件")
    if failures:
        log(f"失敗ID     : {', '.join(failures[:10])}")
    log(f"manifest   : {manifest_path}")
    log(f"images     : {cfg.images_dir}")
    log("\n次のステップ: node scripts/build-products.mjs --manifest data/kurashi/manifest.json")


if __name__ == "__main__":
    main()
