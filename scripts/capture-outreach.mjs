import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { execSync } from "node:child_process";

const OUT = "/workspace/public/outreach";
const TMP = "/tmp/jbc-capture";
await mkdir(OUT, { recursive: true });
await mkdir(TMP, { recursive: true });

const browser = await chromium.launch({
  args: ["--disable-blink-features=AutomationControlled"],
});

async function fullPage(url, path, width, height, extraWait = 1200) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  try {
    await page.waitForLoadState("networkidle", { timeout: 15000 });
  } catch {
    /* GoDaddy and fonts may keep connections */
  }
  await page.waitForTimeout(extraWait);
  await page.evaluate(async () => {
    const imgs = [...document.images];
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? null
          : new Promise((res) => {
              img.addEventListener("load", res);
              img.addEventListener("error", res);
            }),
      ),
    );
  });
  await page.screenshot({ path, fullPage: true });
  const box = await page.evaluate(() => ({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
    title: document.title,
  }));
  await page.close();
  console.log("wrote", path, box);
}

console.log("BEFORE original…");
await fullPage(
  "https://johnburkeconstruction.com/",
  `${OUT}/before-original-desktop.png`,
  1440,
  900,
  4000,
);

console.log("AFTER desktop…");
await fullPage(
  "http://127.0.0.1:8080/",
  `${OUT}/after-desktop.png`,
  1440,
  900,
  1500,
);

console.log("AFTER mobile…");
await fullPage(
  "http://127.0.0.1:8080/",
  `${OUT}/after-mobile.png`,
  390,
  844,
  1500,
);

console.log("SCROLL video…");
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  recordVideo: { dir: TMP, size: { width: 1440, height: 900 } },
});
const page = await context.newPage();
await page.goto("http://127.0.0.1:8080/", {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});
await page.waitForTimeout(1800);
const height = await page.evaluate(() => document.documentElement.scrollHeight);
const steps = 28;
for (let i = 1; i <= steps; i++) {
  const y = Math.round((height - 900) * (i / steps));
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "auto" }), y);
  await page.waitForTimeout(180);
}
await page.waitForTimeout(600);
const video = page.video();
await page.close();
const webm = await video.path();
await context.close();
console.log("webm", webm);

execSync(
  `ffmpeg -y -i "${webm}" -an -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${OUT}/after-scroll.mp4"`,
  { stdio: "inherit" },
);
execSync(
  `ffmpeg -y -i "${OUT}/after-scroll.mp4" -vf "fps=8,scale=960:-1:flags=lanczos" -loop 0 "${OUT}/after-scroll.gif"`,
  { stdio: "inherit" },
);

await browser.close();

execSync(`python3 - << 'PY'
from pathlib import Path
from PIL import Image
for p in Path("/workspace/public/outreach").iterdir():
    print(f"{p.name:40} {p.stat().st_size:10}")
    if p.suffix.lower() in {".png", ".jpg", ".gif"}:
        im = Image.open(p)
        print("  ", im.format, im.size, im.n_frames if hasattr(im, "n_frames") else 1)
PY`, { stdio: "inherit" });
