#!/usr/bin/env node
/**
 * 角丸外側の黒背景を透明にし、各サイズの favicon / apple-touch-icon を再生成する。
 *
 * 実行: node scripts/fix-favicons.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "public", "favicon_v1.png");

/** @param {Buffer} data @param {number} channels */
function removeDarkBackground(data, channels) {
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 72 && g < 72 && b < 72) {
      data[i + 3] = 0;
    }
  }
}

/**
 * @param {sharp.Sharp} image
 * @returns {Promise<Buffer>}
 */
async function toTransparentSquare(image) {
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  removeDarkBackground(data, info.channels);
  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toBuffer();
}

/**
 * @param {Buffer} png
 * @param {string} outputPath
 * @param {number} size
 */
async function writeSized(png, outputPath, size) {
  await sharp(png).resize(size, size).png().toFile(outputPath);
}

async function main() {
  const sourceBuffer = readFileSync(SOURCE);
  const transparentPng = await toTransparentSquare(sharp(sourceBuffer));

  const outputs = [
    [join(ROOT, "public", "favicon_v1.png"), 192],
    [join(ROOT, "public", "favicon-32_v1.png"), 32],
    [join(ROOT, "public", "images", "apple-touch-icon_v1.png"), 180],
    [join(ROOT, "public", "images", "icon-192_v1.png"), 192],
    [join(ROOT, "public", "images", "icon_v1.png"), 512],
    [join(ROOT, "public", "icon.png"), 512],
  ];

  for (const [path, size] of outputs) {
    await writeSized(transparentPng, path, size);
    console.log(`wrote ${path} (${size}x${size})`);
  }

  const ico = await pngToIco([
    join(ROOT, "public", "favicon-32_v1.png"),
  ]);
  writeFileSync(join(ROOT, "public", "favicon.ico"), ico);
  console.log("wrote public/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
