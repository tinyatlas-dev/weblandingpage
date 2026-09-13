const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = path.join(
  "d:/StartUP/weblandingpage/public/brand/logo-official.png"
);

async function make(input, output, size) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum < 18 && chroma < 14) data[i + 3] = 0;
    else if (lum < 32 && chroma < 18) {
      data[i + 3] = Math.min(
        data[i + 3],
        Math.round(((lum - 18) / 14) * 255)
      );
    }
  }

  const keyed = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .trim({ threshold: 5 })
    .toBuffer();

  await sharp(keyed)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(output);
}

(async () => {
  await make(src, "d:/StartUP/weblandingpage/app/icon.png", 256);
  await make(src, "d:/StartUP/weblandingpage/public/favicon-32.png", 32);
  await make(src, "d:/StartUP/weblandingpage/public/apple-touch-icon.png", 180);

  const png64 = await sharp("d:/StartUP/weblandingpage/app/icon.png")
    .resize(64, 64)
    .png()
    .toBuffer();
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">' +
    '<image href="data:image/png;base64,' +
    png64.toString("base64") +
    '" width="64" height="64"/>' +
    "</svg>";
  fs.writeFileSync("d:/StartUP/weblandingpage/public/icon.svg", svg);

  const conflict = "d:/StartUP/weblandingpage/public/icon.png";
  if (fs.existsSync(conflict)) fs.unlinkSync(conflict);

  console.log("ok", fs.statSync("d:/StartUP/weblandingpage/app/icon.png").size);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
