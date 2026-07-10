import { test, expect } from '@playwright/test';

test('page loads successfully', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.locator('main')).toBeVisible();
});

test('page has body content', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('h1')).toBeVisible();
});
