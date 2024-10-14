import { test, expect } from '@playwright/test';

test('contain_title', async ({page}) => {
    await page.goto('https://kl63.github.io/is373_project/2024/10/14/containerization/');

    await expect(page).toHaveTitle(/Containerization/);

});

test('contain_check', async ({ page }) => {
    // Navigate to the page you want to test
    await page.goto('https://kl63.github.io/is373_project/2024/10/14/containerization/');
    
    // Wait for the content to load (optional, depending on the page behavior)
    await page.waitForLoadState('domcontentloaded');
  
    // Verify that the content includes the Docker definition
    const content = await page.content();
    expect(content).toContain(
      'allows applications to run in isolated environments called containers. Unlike virtual machines, containers share the host OS kernel but have their own file system, network, and process space.'
    );
  });