import { chromium } from 'playwright';

const shots = [
  { url: 'http://127.0.0.1:8080/', name: 'home-1440', w: 1440, h: 900, full: true },
  { url: 'http://127.0.0.1:8080/', name: 'home-390', w: 390, h: 844, full: true },
  { url: 'http://127.0.0.1:8080/work', name: 'work-1440', w: 1440, h: 900, full: true },
  { url: 'http://127.0.0.1:8080/contact', name: 'contact-1440', w: 1440, h: 900, full: true },
  { url: 'http://127.0.0.1:8080/outreach', name: 'outreach-1440', w: 1440, h: 900, full: false },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await page.goto(s.url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  console.log(s.name, 'overflow', overflow, 'title', await page.title());
  await page.screenshot({ path: `/workspace/screenshots/${s.name}.png`, fullPage: s.full });
  await page.close();
}
await browser.close();
console.log('done');
