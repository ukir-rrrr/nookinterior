// @ts-check
import { readFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import QRCode from "qrcode";
import { categoryIconSvg } from "./category-icons.mjs";
import {
  BRAND,
  CATEGORIES,
  SCENES,
  COMPANY,
  productDisplayPrice,
  shortProductName,
} from "./data.mjs";

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

/**
 * @param {string} root
 * @param {string} publicPath
 * @returns {string}
 */
export function assetDataUri(root, publicPath) {
  const normalized = publicPath.replace(/^\//, "");
  const abs = join(root, "public", normalized);
  if (!existsSync(abs)) {
    throw new Error(`画像が見つかりません: ${publicPath}`);
  }
  const buf = readFileSync(abs);
  const ext = extname(abs).toLowerCase();
  const mime = MIME[ext] ?? "application/octet-stream";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

/**
 * @param {string} siteUrl
 * @returns {Promise<string>}
 */
export async function qrDataUri(siteUrl) {
  return QRCode.toDataURL(siteUrl, {
    margin: 1,
    width: 180,
    color: { dark: "#3d3d3d", light: "#faf8f5" },
  });
}

/**
 * @param {import("./data.mjs").PamphletProduct} product
 * @param {string} imageSrc
 * @returns {string}
 */
function renderProductCard(product, imageSrc) {
  return `
    <article class="product-card">
      <div class="product-thumb">
        <img src="${imageSrc}" alt="" />
      </div>
      <div class="product-body">
        <h4>${escapeHtml(shortProductName(product))}</h4>
        <p class="product-price">${productDisplayPrice(product)}<span class="tax">（税込）</span></p>
      </div>
    </article>
  `;
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * @param {object} input
 * @param {string} input.root
 * @param {import("./data.mjs").PamphletProduct[]} input.products
 * @param {import("./data.mjs").PamphletProduct[]} input.outsideProducts
 * @param {import("./data.mjs").PamphletProduct[]} input.insideProducts
 * @param {import("./data.mjs").PamphletProduct} input.heroProduct
 * @param {import("./data.mjs").PamphletProduct} input.storyProduct
 * @param {string} input.siteUrl
 * @param {string} input.heroSceneImage
 * @param {string} input.logoImage
 * @returns {Promise<string>}
 */
export async function renderPamphletHtml(input) {
  const {
    root,
    outsideProducts,
    insideProducts,
    heroProduct,
    storyProduct,
    siteUrl,
    heroSceneImage,
    logoImage,
  } = input;

  const qr = await qrDataUri(siteUrl);
  const totalProducts = input.products.length;

  const outsideProductCards = outsideProducts
    .map((p) => renderProductCard(p, assetDataUri(root, p.image)))
    .join("");

  const insideProductCards = insideProducts
    .map((p) => renderProductCard(p, assetDataUri(root, p.image)))
    .join("");

  const categoryItems = CATEGORIES.map(
    (c) => `
      <li class="category-item">
        ${categoryIconSvg(c.slug)}
        <span class="category-name">${escapeHtml(c.name)}</span>
      </li>
    `,
  ).join("");

  const sceneItems = SCENES.map(
    (s) => `<li>${escapeHtml(s.name)}</li>`,
  ).join("");

  const strengthItems = BRAND.strengths
    .map(
      (s, i) => `
        <li class="strength-item">
          <span class="strength-num">0${i + 1}</span>
          <div>
            <h4>${escapeHtml(s.title)}</h4>
            <p>${escapeHtml(s.body)}</p>
          </div>
        </li>
      `,
    )
    .join("");

  const storySceneItems = BRAND.storyScenes
    .map(
      (scene) => `
        <li class="story-scene-item">
          <span class="story-scene-name">${escapeHtml(scene.name)}</span>
          <span class="story-scene-note">${escapeHtml(scene.note)}</span>
        </li>
      `,
    )
    .join("");

  const css = readFileSync(join(root, "templates", "pamphlet.css"), "utf8");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>roomy パンフレット</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>${css}</style>
</head>
<body>
  <p class="print-note">3つ折り印刷用（表＝1ページ目 / 裏＝2ページ目）。右→左の順に折りたたんでください。</p>

  <!-- 表（外側）: 左=商品 / 中央=ストーリー / 右=表紙 -->
  <section class="sheet outside" aria-label="表（外側）">
    <div class="panel panel-products panel-light">
      <header class="panel-header">
        <p class="eyebrow">PRODUCTS</p>
        <h2>注目商品</h2>
      </header>
      <div class="product-list">${outsideProductCards}</div>
      <footer class="panel-footer-note">${totalProducts}+ ITEMS</footer>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>

    <div class="panel panel-story panel-warm">
      <header class="panel-header">
        <p class="eyebrow">OUR STORY</p>
        <h2>roomy について</h2>
      </header>
      <div class="story-photo">
        <img src="${assetDataUri(root, storyProduct.image)}" alt="" />
      </div>
      <p class="story-text">${escapeHtml(BRAND.story)}</p>
      <footer class="story-footer">
        <blockquote class="story-quote">${escapeHtml(BRAND.storyQuote)}</blockquote>
        <ul class="story-scene-grid">${storySceneItems}</ul>
        <div class="story-stats">
          <span>${totalProducts}+ ITEMS</span>
          <span class="story-stats-dot" aria-hidden="true"></span>
          <span>12 CATEGORIES</span>
          <span class="story-stats-dot" aria-hidden="true"></span>
          <span>4 SCENES</span>
        </div>
      </footer>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>

    <div class="panel panel-cover panel-dark">
      <header class="cover-top">
        <p class="eyebrow light">CATEGORIES</p>
        <h2 class="cover-heading">商品カテゴリー</h2>
        <ul class="category-grid">${categoryItems}</ul>
      </header>
      <div class="cover-brand">
        <img class="cover-logo" src="${assetDataUri(root, logoImage)}" alt="roomy" />
        <p class="cover-tagline">${escapeHtml(BRAND.tagline)}</p>
        <p class="cover-catch">${escapeHtml(BRAND.catchcopy)}</p>
      </div>
      <footer class="cover-shop">
        <p class="eyebrow light">SHOP INFORMATION</p>
        <div class="shop-row">
          <div class="shop-details">
            <p>${escapeHtml(COMPANY.email)}</p>
            <p>${escapeHtml(COMPANY.phone)}</p>
            <p>${escapeHtml(COMPANY.hours)}</p>
            <p class="shop-url">${escapeHtml(siteUrl)}</p>
          </div>
          <img class="shop-qr" src="${qr}" alt="QR code" />
        </div>
      </footer>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>
  </section>

  <!-- 裏（内側）: 左=ヒーロー / 中央=サービス / 右=商品 -->
  <section class="sheet inside" aria-label="裏（内側）">
    <div class="panel panel-hero">
      <img class="hero-bg" src="${assetDataUri(root, heroSceneImage)}" alt="" />
      <div class="hero-overlay">
        <p class="eyebrow light">LIVING SCENE</p>
        <h2 class="hero-title">${escapeHtml(BRAND.catchcopy)}</h2>
        <p class="hero-sub">${totalProducts}+ ROOMY PRODUCTS</p>
      </div>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>

    <div class="panel panel-service panel-light">
      <header class="panel-header">
        <p class="eyebrow">SERVICE</p>
        <h2>サービス概要</h2>
      </header>
      <div class="service-photo">
        <img src="${assetDataUri(root, heroProduct.image)}" alt="" />
      </div>
      <div class="service-content">
        <h3 class="service-subtitle">選ばれる3つの理由</h3>
        <ol class="strength-list">${strengthItems}</ol>
        <div class="scene-box">
          <p class="scene-label">利用シーンから探す</p>
          <ul class="scene-list">${sceneItems}</ul>
        </div>
      </div>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>

    <div class="panel panel-products panel-light">
      <header class="panel-header">
        <p class="eyebrow">PRODUCTS</p>
        <h2>おすすめアイテム</h2>
      </header>
      <div class="product-list">${insideProductCards}</div>
      <footer class="panel-footer-note">${escapeHtml(COMPANY.shipping)}</footer>
      <div class="fold-guide" aria-hidden="true"></div>
    </div>
  </section>
</body>
</html>`;
}
