import { test, expect } from '@playwright/test';

test('laman aplikasi.us boleh dibuka', async ({ page }) => {
  const response = await page.goto('https://aplikasi.us');
  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/.+/);
});

test('halaman repo marketplace di GitHub wujud', async ({ page }) => {
  await page.goto('https://github.com/manhavert/first');
  await expect(page.getByText('Aplikasi Plugins untuk Claude')).toBeVisible();
});
