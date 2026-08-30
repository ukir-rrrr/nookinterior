#!/usr/bin/env python3
"""
Phase A: 楽天から商品画像を収集し、nookinterior 用 manifest.json を出力する。

【出力】
  data/rakuten/manifest.json
  public/images/products/{product_id}/01.jpg ...

【設定】
  data/rakuten/config.json  … 収集条件
  .env.local                … 楽天 API キー（docs/rakuten-env.example 参照）

【実行例】
  python scripts/rakuten_fetch.py
  python scripts/rakuten_fetch.py --max-products 5
  python scripts/rakuten_fetch.py --config data/rakuten/config.json
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from datetime import datetime, timezone, timedelta
from html import unescape
from pathlib import Path
from threading import Lock
from urllib.parse import urlparse

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DEFAULT_CONFIG_PATH = PROJECT_ROOT / "data" / "rakuten" / "config.json"
ENDPOINT = "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

JST = timezone(timedelta(hours=9))
print_lock = Lock()


@dataclass
class Config:
    shop_code: str = "gachinko"
    mode: str = "category_list"
    category_urls: list[str] = field(default_factory=list)
    search_keyword: str = "ソファ"
    max_products: int = 100
    max_images_per_product: int = 8
    request_interval_sec: float = 1.0
    concurrency: int = 5
    use_page_images: bool = True
    manifest_path: Path = field(
        default_factory=lambda: PROJECT_ROOT / "data" / "rakuten" / "manifest.json"
    )
    images_dir: Path = field(
        default_factory=lambda: PROJECT_ROOT / "public" / "images" / "products"
    )
    images_web_path: str = "/images/products"
    application_id: str = ""
    access_key: str = ""
    referer_url: str = ""


def log(msg: str) -> None:
    with print_lock:
        print(msg, flush=True)


def resolve_project_path(raw_path: str | Path) -> Path:
    path = Path(raw_path)
    if path.is_absolute():
        return path
    return PROJECT_ROOT / path


def load_dotenv(path: Path, *, override: bool = False) -> None:
    if not path.is_file():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if override:
            os.environ[key] = value
        else:
            os.environ.setdefault(key, value)


def load_config(path: Path) -> Config:
    load_dotenv(PROJECT_ROOT / ".env")
    load_dotenv(PROJECT_ROOT / ".env.local", override=True)
    raw = {}
    if path.is_file():
        raw = json.loads(path.read_text(encoding="utf-8"))

    category_urls = raw.get("categoryUrls") or []
    if not category_urls and raw.get("categoryUrl"):
        category_urls = [raw["categoryUrl"]]

    manifest_path = resolve_project_path(
        raw.get("manifestPath", raw.get("manifestDir", "data/rakuten/manifest.json"))
    )
    if manifest_path.suffix != ".json":
        manifest_path = manifest_path / "manifest.json"

    images_dir = resolve_project_path(
        raw.get("imagesDir", "public/images/products")
    )

    return Config(
        shop_code=raw.get("shopCode", "gachinko"),
        mode=raw.get("mode", "category_list"),
        category_urls=category_urls,
        search_keyword=raw.get("searchKeyword", "ソファ"),
        max_products=int(raw.get("maxProducts", 100)),
        max_images_per_product=int(raw.get("maxImagesPerProduct", 8)),
        request_interval_sec=float(raw.get("requestIntervalSec", 1.0)),
        concurrency=max(1, int(raw.get("concurrency", 5))),
        use_page_images=bool(raw.get("usePageImages", True)),
        manifest_path=manifest_path,
        images_dir=images_dir,
        images_web_path=raw.get("imagesWebPath", "/images/products").rstrip("/"),
        application_id=os.getenv("RAKUTEN_APPLICATION_ID", raw.get("applicationId", "")),
        access_key=os.getenv("RAKUTEN_ACCESS_KEY", raw.get("accessKey", "")),
        referer_url=os.getenv("RAKUTEN_REFERER_URL", raw.get("refererUrl", "")),
    )


def sanitize_dirname(name: str) -> str:
    name = re.sub(r'[\\/:*?"<>|]', "_", name)
    return name.strip() or "unknown"


def normalize_item_url(url: str) -> str:
    url = url.split("?")[0].split("#")[0]
    if not url.endswith("/"):
        url += "/"
    return url


def item_slug(item_url: str) -> str:
    return item_url.rstrip("/").split("/")[-1]


def fetch_html(url: str, referer: str | None = None) -> str:
    res = requests.get(
        url,
        headers={"User-Agent": USER_AGENT, "Referer": referer or url},
        timeout=30,
    )
    res.raise_for_status()
    return unescape(res.text)


def api_get(cfg: Config, params: dict) -> requests.Response:
    params = {
        **params,
        "applicationId": cfg.application_id,
        "accessKey": cfg.access_key,
        "format": "json",
    }
    headers = {"Referer": cfg.referer_url} if cfg.referer_url else {}
    last_res: requests.Response | None = None
    for attempt in range(3):
        res = requests.get(ENDPOINT, params=params, headers=headers, timeout=20)
        last_res = res
        if res.status_code == 429:
            wait = cfg.request_interval_sec * (attempt + 1)
            log(f"  レート制限(429)。{wait:.0f}秒待機...")
            time.sleep(wait)
            continue
        if res.status_code != 200:
            log(f"  API エラー: {res.status_code} {res.text[:200]}")
        res.raise_for_status()
        return res
    assert last_res is not None
    last_res.raise_for_status()
    return last_res


def item_from_api_item(raw: dict, rank: int | None = None) -> dict:
    item_url = normalize_item_url(raw.get("itemUrl", ""))
    slug = item_slug(item_url) if item_url else sanitize_dirname(raw.get("itemCode", "item"))
    return {
        "id": slug,
        "name": raw.get("itemName", slug),
        "price": int(raw.get("itemPrice", 0) or 0),
        "itemUrl": item_url,
        "itemCode": raw.get("itemCode", ""),
        "rank": rank,
        "mediumImageUrls": raw.get("mediumImageUrls", []),
    }


def lookup_item_via_api(cfg: Config, item_url: str) -> dict | None:
    slug = item_slug(item_url)
    params = {
        "shopCode": cfg.shop_code,
        "keyword": slug,
        "hits": 5,
        "imageFlag": 1,
    }
    try:
        data = api_get(cfg, params).json()
    except requests.RequestException:
        return None

    for entry in data.get("Items", []):
        raw = entry.get("Item", {})
        if slug in normalize_item_url(raw.get("itemUrl", "")):
            return item_from_api_item(raw)
    items = data.get("Items", [])
    if items:
        return item_from_api_item(items[0]["Item"])
    return None


def extract_category_product_urls(html: str, shop_code: str) -> list[str]:
    pattern = rf'href="(https://item\.rakuten\.co\.jp/{re.escape(shop_code)}/[a-z0-9_-]+/?)"'
    urls: list[str] = []
    seen: set[str] = set()
    for match in re.finditer(pattern, html, flags=re.I):
        url = normalize_item_url(match.group(1))
        if url.endswith("/c/"):
            continue
        if url not in seen:
            seen.add(url)
            urls.append(url)
    return urls


def collect_category_list_urls(cfg: Config) -> list[str]:
    urls: list[str] = []
    seen: set[str] = set()

    for base_url in cfg.category_urls:
        for page in range(1, 21):
            if len(urls) >= cfg.max_products:
                break
            page_url = base_url if page == 1 else f"{base_url.rstrip('/')}/?p={page}"
            try:
                html = fetch_html(page_url)
            except requests.RequestException as exc:
                log(f"  カテゴリ取得失敗 ({page_url}): {exc}")
                break

            page_urls = extract_category_product_urls(html, cfg.shop_code)
            if not page_urls:
                break

            added = 0
            for url in page_urls:
                if url not in seen:
                    seen.add(url)
                    urls.append(url)
                    added += 1
                if len(urls) >= cfg.max_products:
                    break

            log(f"  カテゴリ {page_url} → +{added}件（累計 {len(urls)}件）")
            if added == 0:
                break
            time.sleep(cfg.request_interval_sec)

    return urls[: cfg.max_products]


def extract_category_ranked_products(cfg: Config) -> list[dict]:
    if not cfg.category_urls:
        raise ValueError("category_ranking モードには categoryUrls が必要です")

    html = fetch_html(cfg.category_urls[0])
    products: list[dict] = []
    for rank in range(1, cfg.max_products + 1):
        match = re.search(
            rf'no{rank}\.jpg.*?href="(https://item\.rakuten\.co\.jp/{re.escape(cfg.shop_code)}/[^"?#]+/?)"',
            html,
            re.I | re.S,
        )
        if not match:
            log(f"  警告: No.{rank} が見つかりません")
            continue
        item_url = normalize_item_url(match.group(1))
        slug = item_slug(item_url)
        products.append({
            "id": slug,
            "name": f"No.{rank} {slug}",
            "price": 0,
            "itemUrl": item_url,
            "itemCode": f"{cfg.shop_code}:{slug}",
            "rank": rank,
            "mediumImageUrls": [],
        })
    return products


def search_products_via_api(cfg: Config) -> list[dict]:
    remaining = cfg.max_products
    page = 1
    products: list[dict] = []

    while remaining > 0 and page <= 10:
        hits = min(30, remaining)
        params = {
            "shopCode": cfg.shop_code,
            "keyword": cfg.search_keyword,
            "hits": hits,
            "page": page,
            "imageFlag": 1,
        }
        data = api_get(cfg, params).json()
        items = data.get("Items", [])
        if not items:
            break
        for entry in items:
            products.append(item_from_api_item(entry["Item"]))
        remaining -= len(items)
        page += 1
        time.sleep(cfg.request_interval_sec)

    return products[: cfg.max_products]


def parse_metadata_from_page(item_url: str) -> dict:
    html = fetch_html(item_url)
    title_match = re.search(r"<title>([^<]+)</title>", html, re.I)
    title = title_match.group(1).strip() if title_match else ""
    title = re.sub(r"\s*[|｜-].*$", "", title).strip()

    price = 0
    price_match = re.search(r"(\d{1,3}(?:,\d{3})*)\s*円", html)
    if price_match:
        price = int(price_match.group(1).replace(",", ""))

    return {"name": title, "price": price}


def enrich_product_metadata(cfg: Config, product: dict) -> dict:
    name = str(product.get("name") or "")
    needs_api = (
        not name
        or not product.get("price")
        or name.startswith("No.")
        or not product.get("itemCode")
    )
    if not needs_api:
        return product

    api_item = lookup_item_via_api(cfg, product["itemUrl"])
    if api_item:
        product["name"] = api_item["name"]
        product["price"] = api_item["price"]
        product["itemCode"] = api_item.get("itemCode", product.get("itemCode", ""))
        product["mediumImageUrls"] = api_item.get("mediumImageUrls", [])
        product["id"] = api_item.get("id", product["id"])
        return product

    page_meta = parse_metadata_from_page(product["itemUrl"])
    if page_meta.get("name"):
        product["name"] = page_meta["name"]
    if page_meta.get("price"):
        product["price"] = page_meta["price"]
    return product


def collect_products(cfg: Config) -> list[dict]:
    if cfg.mode == "category_ranking":
        products = extract_category_ranked_products(cfg)
    elif cfg.mode == "keyword_search":
        products = search_products_via_api(cfg)
    elif cfg.mode == "category_list":
        urls = collect_category_list_urls(cfg)
        products = [
            {
                "id": item_slug(url),
                "name": "",
                "price": 0,
                "itemUrl": url,
                "itemCode": "",
                "mediumImageUrls": [],
            }
            for url in urls
        ]
    else:
        raise ValueError(f"未知の mode: {cfg.mode}")

    enriched: list[dict] = []
    for index, product in enumerate(products, start=1):
        if index > 1:
            time.sleep(cfg.request_interval_sec / max(cfg.concurrency, 1))
        enriched.append(enrich_product_metadata(cfg, product))
    return enriched


def to_fullsize_url(thumbnail_url: str) -> str:
    return re.sub(r"\?_ex=\d+x\d+$", "", thumbnail_url)


def shorten_product_name(name: str, max_chars: int = 36) -> str:
    """楽天の SEO 向け長タイトルを EC 表示用に短縮する。"""
    cleaned = name.strip()
    cleaned = re.sub(r"【[^】]*】", " ", cleaned)
    cleaned = re.sub(r"\s+[A-Z]{2,}\d{3,}\s*$", "", cleaned, flags=re.I)
    cleaned = re.sub(r"[：:][^：:]*$", "", cleaned).strip()
    cleaned = re.sub(r"\s+", " ", cleaned)
    if len(cleaned) <= max_chars:
        return cleaned

    key_terms = (
        "ワゴン", "本棚", "ラック", "シェルフ", "ソファ", "チェア", "テーブル",
        "ベッド", "キャビネット", "ボード", "棚", "収納", "ミラー", "照明",
    )
    picked: list[str] = []
    seen_terms: set[str] = set()

    for word in cleaned.split():
        repeat_term = next(
            (term for term in key_terms if term in word and term in seen_terms),
            None,
        )
        if repeat_term and len(picked) >= 2:
            prefix = word.split(repeat_term)[0].split("収納")[0].strip()
            if len(prefix) >= 2 and prefix not in picked:
                picked.append(prefix)
            break

        candidate = " ".join([*picked, word])
        if len(candidate) > max_chars and picked:
            break

        picked.append(word)
        for term in key_terms:
            if term in word:
                seen_terms.add(term)
        if len(picked) >= 5:
            break

    return " ".join(picked) if picked else cleaned[:max_chars]


def is_detail_image_url(url: str) -> bool:
    base = url.rsplit("/", 1)[-1].lower()
    if re.search(r"i\.(jpe?g|png|webp)$", base):
        return True
    return any(token in base for token in ("detail", "spec", "banner"))


def gallery_sort_key(url: str) -> tuple[int, int, str]:
    base = url.rsplit("/", 1)[-1].lower()
    if is_detail_image_url(url):
        return (2, 9999, url)
    nums = [int(n) for n in re.findall(r"\d+", base)]
    return (0, nums[-1] if nums else 0, url)


def api_image_urls(product: dict) -> list[str]:
    urls: list[str] = []
    for img in product.get("mediumImageUrls", []):
        url = img.get("imageUrl")
        if url:
            urls.append(to_fullsize_url(url))
    return urls


def extract_page_gallery_urls(item_url: str, shop_code: str) -> list[str]:
    html = fetch_html(item_url)
    pattern = rf"https://tshop\.r10s\.jp/{re.escape(shop_code)}/cabinet/[^\s\"'<>\\]+"
    found: list[str] = []
    seen: set[str] = set()
    for raw in re.findall(pattern, html, flags=re.I):
        url = re.sub(r"\?.*$", "", raw)
        if url.endswith(".gif"):
            continue
        if "/contentpage/" in url or "/tenpo/" in url:
            continue
        if url not in seen:
            seen.add(url)
            found.append(url)

    if not found:
        return []

    by_dir: dict[str, list[str]] = defaultdict(list)
    for url in found:
        by_dir[url.rsplit("/", 1)[0]].append(url)

    main_dir = max(by_dir, key=lambda d: len(by_dir[d]))
    gallery = by_dir[main_dir]
    gallery = [url for url in gallery if not is_detail_image_url(url)]
    gallery.sort(key=gallery_sort_key)
    return gallery


def collect_image_source_urls(cfg: Config, product: dict) -> list[str]:
    urls: list[str] = []
    urls.extend(api_image_urls(product))

    page_urls: list[str] = []
    if cfg.use_page_images and product.get("itemUrl"):
        try:
            page_urls = extract_page_gallery_urls(product["itemUrl"], cfg.shop_code)
        except requests.RequestException as exc:
            log(f"  ページ画像取得失敗 ({product['id']}): {exc}")

    for url in sorted(page_urls, key=gallery_sort_key):
        if url not in urls:
            urls.append(url)

    if not urls and page_urls:
        urls = sorted(page_urls, key=gallery_sort_key)

    return list(dict.fromkeys(urls))[: cfg.max_images_per_product]


CATEGORY_RULES: list[tuple[str, list[str]]] = [
    ("sofa", ["ソファ", "カウチ", "sofa"]),
    ("table", ["テーブル", "デスク", "机", "table", "desk"]),
    ("chair", ["チェア", "椅子", "スツール", "ベンチ", "chair"]),
    ("tvboard", ["テレビ", "tv", "ローボード", "tvboard"]),
    ("storage", ["収納", "ラック", "本棚", "チェスト", "キャビネット", "棚"]),
    ("bed", ["ベッド", "bed", "マットレス"]),
    ("mirror", ["ミラー", "鏡", "mirror"]),
    ("lighting", ["照明", "ライト", "ランプ", "light"]),
    ("rug", ["ラグ", "マット", "カーペット", "rug"]),
    ("goods", ["雑貨", "インテリア", "小物"]),
]


def guess_category_slug(name: str) -> str:
    lowered = name.lower()
    for slug, keywords in CATEGORY_RULES:
        for keyword in keywords:
            if keyword.lower() in lowered:
                return slug
    return "goods"


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
        if "gif" in content_type:
            return ".gif"
    return ".jpg"


def download_image(url: str, save_path: Path) -> Path:
    if save_path.exists() and save_path.stat().st_size > 0:
        return save_path

    res = requests.get(
        url,
        headers={"User-Agent": USER_AGENT, "Referer": url},
        timeout=30,
    )
    res.raise_for_status()
    ext = guess_extension(url, res.headers.get("Content-Type"))
    if save_path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        save_path = save_path.with_suffix(ext)
    save_path.parent.mkdir(parents=True, exist_ok=True)
    save_path.write_bytes(res.content)
    return save_path


def process_product(cfg: Config, product: dict) -> dict:
    product_id = sanitize_dirname(product["id"])
    name = shorten_product_name(product.get("name") or product_id)
    source_urls = collect_image_source_urls(cfg, product)

    image_dir = cfg.images_dir / product_id
    saved_paths: list[str] = []
    saved_sources: list[str] = []

    for index, url in enumerate(source_urls, start=1):
        target = image_dir / f"{index:02d}"
        try:
            saved = download_image(url, target)
            web_path = f"{cfg.images_web_path}/{product_id}/{saved.name}"
            saved_paths.append(web_path)
            saved_sources.append(url)
            log(f"    [{product_id}] 保存: {saved.name}")
        except requests.RequestException as exc:
            log(f"    [{product_id}] 画像{index}失敗: {exc}")

    return {
        "id": product_id,
        "name": name,
        "price": int(product.get("price") or 0),
        "categorySlug": guess_category_slug(name),
        "itemUrl": product.get("itemUrl", ""),
        "itemCode": product.get("itemCode", ""),
        "rank": product.get("rank"),
        "images": saved_paths,
        "sourceUrls": saved_sources,
    }


def write_manifest(cfg: Config, products: list[dict]) -> Path:
    manifest = {
        "generatedAt": datetime.now(JST).isoformat(),
        "source": {
            "shopCode": cfg.shop_code,
            "mode": cfg.mode,
            "categoryUrls": cfg.category_urls,
            "searchKeyword": cfg.search_keyword,
        },
        "products": products,
    }
    cfg.manifest_path.parent.mkdir(parents=True, exist_ok=True)
    cfg.manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return cfg.manifest_path


def validate_credentials(cfg: Config) -> None:
    missing = []
    if not cfg.application_id or cfg.application_id.startswith("your_"):
        missing.append("RAKUTEN_APPLICATION_ID")
    if not cfg.access_key or cfg.access_key.startswith("your_"):
        missing.append("RAKUTEN_ACCESS_KEY")
    if missing:
        print("エラー: 以下を .env.local に設定してください（docs/rakuten-env.example 参照）")
        for key in missing:
            print(f"  - {key}")
        sys.exit(1)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="楽天商品画像収集 + manifest 生成")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG_PATH, help="設定 JSON")
    parser.add_argument("--max-products", type=int, help="取得商品数上書き")
    parser.add_argument("--mode", choices=["category_list", "category_ranking", "keyword_search"])
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config_path = args.config
    if not config_path.is_absolute():
        config_path = PROJECT_ROOT / config_path

    cfg = load_config(config_path)
    if args.max_products:
        cfg.max_products = args.max_products
    if args.mode:
        cfg.mode = args.mode

    validate_credentials(cfg)

    cfg.images_dir.mkdir(parents=True, exist_ok=True)

    log("=== 楽天画像収集 (nookinterior) ===")
    log(f"mode           : {cfg.mode}")
    log(f"shopCode       : {cfg.shop_code}")
    log(f"maxProducts    : {cfg.max_products}")
    log(f"maxImages/prod : {cfg.max_images_per_product}")
    log(f"concurrency    : {cfg.concurrency}")
    log(f"manifest       : {cfg.manifest_path}")
    log(f"imagesDir      : {cfg.images_dir}")

    products = collect_products(cfg)
    if not products:
        log("商品が見つかりませんでした。")
        sys.exit(1)

    log(f"\n商品 {len(products)} 件の画像取得を開始...")

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

    log("\n=== Phase A 完了 ===")
    log(f"商品数     : {len(manifest_products)} / {cfg.max_products}")
    log(f"画像合計   : {total_images} 枚")
    log(f"平均枚数   : {avg_images:.1f} 枚/商品")
    log(f"失敗       : {len(failures)} 件")
    if failures:
        log(f"失敗ID     : {', '.join(failures[:10])}")
    log(f"manifest   : {manifest_path}")
    log(f"images     : {cfg.images_dir}")
    log("\n次のステップ: node scripts/build-products.mjs")


if __name__ == "__main__":
    main()
