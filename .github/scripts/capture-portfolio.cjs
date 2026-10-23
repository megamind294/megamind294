const { chromium } = require('playwright');
const { mkdir } = require('node:fs/promises');

async function main() {
  await mkdir('dist', { recursive: true });
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
      colorScheme: 'dark',
      reducedMotion: 'reduce',
    });
    const response = await page.goto('https://rinklesharma.pl/', {
      waitUntil: 'load',
      timeout: 60000,
    });
    if (!response || !response.ok()) {
      throw new Error('Portfolio returned HTTP ' + (response?.status() ?? 'no response'));
    }
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(8000);
    await page.screenshot({
      path: 'dist/portfolio-preview.png',
      fullPage: false,
      animations: 'disabled',
    });
    console.log('Captured portfolio preview: ' + await page.title());
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
