import { test, expect } from '@playwright/test';

const url = 'https://kl63.github.io/is373_project/2024/10/14/threading/';

test('contain_title', async ({page}) => {
    // Navigate to url
    await page.goto(url);
    
    // Check title contents
    await expect(page).toHaveTitle(/Threading/);

});

test('content_check', async ({ page }) => {
    // Navigate to the page you want to test
    await page.goto(url);
    
    // Wait for the content to load (optional, depending on the page behavior)
    await page.waitForLoadState('domcontentloaded');
  
    // Verify that the content includes the Docker definition
    const content = await page.content();
    expect(content).toContain(
      'allows a single process to perform multiple tasks simultaneously using separate threads.'
    );
  });