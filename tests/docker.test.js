import { test, expect } from '@playwright/test';

test('docker_title', async ({page}) => {
    await page.goto('https://kl63.github.io/is373_project/2024/10/15/docker/');

    await expect(page).toHaveTitle(/Docker/);

});

test('docker_def', async ({ page }) => {
    // Navigate to the page you want to test
    await page.goto('https://kl63.github.io/is373_project/2024/10/15/docker/');
    
    // Wait for the content to load (optional, depending on the page behavior)
    await page.waitForLoadState('domcontentloaded');
  
    // Verify that the content includes the Docker definition
    const content = await page.content();
    expect(content).toContain(
      'Docker is an open-source platform that automates the deployment, scaling, and management of applications through containerization.'
    );
  });