import { test, expect } from '@playwright/test';

test('Check Express Server Homepage', async ({ page }) => {
  // Navigate to the root of the Express server
  await page.goto('/');

  // Assert that the page content contains "Hello from Express server!"
  const content = await page.textContent('body');
  expect(content).toContain('Hello from Express server!');
});
