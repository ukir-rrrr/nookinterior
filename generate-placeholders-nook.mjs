/**
 * generate-placeholders.mjs (NOOK interior 用)
 *
 * DESIGN.txt（NOOK interior版）の画像配置リストに基づき、
 * 本番と同じファイルパス・ファイル名・アスペクト比のダミー画像を一括生成します。
 *
 * 使い方:
 *   1. Next.js プロジェクトのルートで実行してください
 *   2. 依存パッケージをインストール: npm install --save-dev sharp
 *   3. スクリプトを配置: scripts/generate-placeholders.mjs としてこのファイルを保存
 *   4. 実行: node scripts/generate-placeholders.mjs
 *
 * 後で本番画像に差し替える際は、同じファイル名・パスに実画像を上書きするだけでOKです。
 * （アスペクト比を本番画像でも合わせることで、レイアウト崩れを防げます）
 */

import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

// 出力先のベースディレクトリ（Next.js の public フォルダ）
const OUTPUT_BASE = path.resolve(process.cwd(), "public");

// カラーパレット（DESIGN.txt(NOOK interior版)のアクセントカラーをローテーションして使用）
// #c97c5d: テラコッタ / #8a9a7e: セージグリーン / それぞれの淡色バリエーション
const PALETTE = ["#c97c5d", "#8a9a7e", "#e3c3b3", "#d3dbc9", "#efeae3"];

/**
 * 画像定義リスト
 * DESIGN.txt(NOOK interior版)「画像配置リスト」+ ロゴ類を網羅
 * 商品画像のアスペクト比は4:3（家具ECのため。キッズサイトの1:1から変更）
 */
const IMAGES = [
  // ロゴ類
  { file: "images/logo.png", w: 240, h: 60, label: "logo.png" },
  { file: "images/icon.png", w: 64, h: 64, label: "icon.png" },

  // 共通UI画像
  { file: "images/common/hero_01.jpg", w: 1600, h: 900, label: "hero_01\n1600x900" },
  { file: "images/common/hero_02.jpg", w: 1600, h: 900, label: "hero_02\n1600x900\n(text_overlay)" },
  { file: "images/common/about.jpg", w: 1200, h: 800, label: "about\n1200x800" },
  { file: "images/common/empty-cart.jpg", w: 800, h: 800, label: "empty-cart\n800x800" },

  // 利用シーンバナー（リビング／ダイニング・キッチン／寝室／書斎・オフィス）4:3寄りの横長バナー
  { file: "images/common/scene_living.jpg", w: 800, h: 600, label: "scene_living\n800x600" },
  { file: "images/common/scene_dining.jpg", w: 800, h: 600, label: "scene_dining\n800x600" },
  { file: "images/common/scene_bedroom.jpg", w: 800, h: 600, label: "scene_bedroom\n800x600" },
  { file: "images/common/scene_study.jpg", w: 800, h: 600, label: "scene_study\n800x600" },

  // 商品画像（カード=4:3、詳細=4:3）DESIGN.txt「プロダクトカード」準拠
  { file: "images/products/sofa/01.jpg", w: 1200, h: 900, label: "sofa/01\n1200x900" },
  { file: "images/products/sofa/main.jpg", w: 1200, h: 900, label: "sofa/main\n1200x900" },

  { file: "images/products/table/01.jpg", w: 1200, h: 900, label: "table/01\n1200x900" },
  { file: "images/products/table/main.jpg", w: 1200, h: 900, label: "table/main\n1200x900" },

  { file: "images/products/chair/01.jpg", w: 1200, h: 900, label: "chair/01\n1200x900" },
  { file: "images/products/chair/main.jpg", w: 1200, h: 900, label: "chair/main\n1200x900" },

  { file: "images/products/tvboard/01.jpg", w: 1200, h: 900, label: "tvboard/01\n1200x900" },
  { file: "images/products/tvboard/main.jpg", w: 1200, h: 900, label: "tvboard/main\n1200x900" },

  { file: "images/products/storage/01.jpg", w: 1200, h: 900, label: "storage/01\n1200x900" },
  { file: "images/products/storage/main.jpg", w: 1200, h: 900, label: "storage/main\n1200x900" },

  { file: "images/products/bed/01.jpg", w: 1200, h: 900, label: "bed/01\n1200x900" },
  { file: "images/products/bed/main.jpg", w: 1200, h: 900, label: "bed/main\n1200x900" },

  { file: "images/products/mirror/01.jpg", w: 1200, h: 900, label: "mirror/01\n1200x900" },
  { file: "images/products/mirror/main.jpg", w: 1200, h: 900, label: "mirror/main\n1200x900" },

  { file: "images/products/lighting/01.jpg", w: 1200, h: 900, label: "lighting/01\n1200x900" },
  { file: "images/products/lighting/main.jpg", w: 1200, h: 900, label: "lighting/main\n1200x900" },

  { file: "images/products/rug/01.jpg", w: 1200, h: 900, label: "rug/01\n1200x900" },
  { file: "images/products/rug/main.jpg", w: 1200, h: 900, label: "rug/main\n1200x900" },

  { file: "images/products/goods/01.jpg", w: 1200, h: 900, label: "goods/01\n1200x900" },
  { file: "images/products/goods/main.jpg", w: 1200, h: 900, label: "goods/main\n1200x900" },
];

function buildSvg(width, height, bgColor, label) {
  const lines = label.split("\n");
  const fontSize = Math.max(14, Math.round(Math.min(width, height) / 14));
  const lineHeight = fontSize * 1.3;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;

  const textNodes = lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      return `<text x="50%" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="${fontSize}" fill="#3a3a3a">${escapeXml(
        line
      )}</text>`;
    })
    .join("\n");

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}" />
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="#d6cfc4" stroke-width="2" />
  <text x="50%" y="${height - 16}" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#8a8378">${width}×${height} placeholder</text>
  ${textNodes}
</svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function generateOne(image, index) {
  const outPath = path.join(OUTPUT_BASE, image.file);
  await mkdir(path.dirname(outPath), { recursive: true });

  const bgColor = PALETTE[index % PALETTE.length];
  const svg = buildSvg(image.w, image.h, bgColor, image.label);
  const buffer = Buffer.from(svg);

  const pipeline = sharp(buffer);
  if (outPath.endsWith(".png")) {
    await pipeline.png().toFile(outPath);
  } else {
    await pipeline.jpeg({ quality: 85 }).toFile(outPath);
  }
  console.log(`generated: ${path.relative(process.cwd(), outPath)} (${image.w}x${image.h})`);
}

async function main() {
  console.log(`出力先: ${OUTPUT_BASE}`);
  for (let i = 0; i < IMAGES.length; i++) {
    await generateOne(IMAGES[i], i);
  }
  console.log(`\n完了: ${IMAGES.length}件のプレースホルダー画像を生成しました。`);
  console.log("本番画像が用意でき次第、同じファイル名・パスに上書きしてください。");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
