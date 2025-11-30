import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('test');
  await page.getByRole('option', { name: 'Writing tests' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('allure');
  await page.getByRole('link', { name: '… already used to create an' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Authentication', exact: true }).click();
});