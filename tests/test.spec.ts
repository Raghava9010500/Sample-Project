import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.locator("//span[@class='DocSearch-Button-Placeholder']").click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('test');
  await page.getByRole('option', { name: 'Writing tests' }).getByRole('link').click();
});
