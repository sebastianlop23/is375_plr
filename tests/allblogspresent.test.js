import { test, expect } from '@playwright/test';

const url = 'https://kl63.github.io/is373_project/archives/';

test('Check if 9 articles are present', async ({ page }) => {
  // Navigate to the URL
  await page.goto(url);

  // Select all article elements (assuming they are within <article> tags)
  const articles = await page.locator('article').count();

  // Log the article count for debugging
  console.log(`Number of articles found: ${articles}`);

  // Assert that there are exactly 9 articles
  expect(articles).toBe(9);
});
