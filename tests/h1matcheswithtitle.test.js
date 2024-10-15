import { test, expect } from '@playwright/test';

const urls = [
    'https://kl63.github.io/is373_project/2024/10/14/ubuntu/',
    'https://kl63.github.io/is373_project/2024/10/14/containerization/',
    'https://kl63.github.io/is373_project/2024/10/14/threading/',
    'https://kl63.github.io/is373_project/2024/10/14/scaling/',
    'https://kl63.github.io/is373_project/2024/10/14/kernel/',
    'https://kl63.github.io/is373_project/2024/10/14/dockervskubernetes/',
    'https://kl63.github.io/is373_project/2024/10/14/virtualizationvscontainerization/',
    'https://kl63.github.io/is373_project/2024/10/14/docker/',
    
];


urls.forEach((url) => {
    test(`title_matches_h1: ${url}`, async ({ page }) => {
        // Navigate to the URL
        await page.goto(url);
        
        // Get the page title
        const pageTitle = await page.title();
    
        const mainTitle = pageTitle.split('|')[0].trim();
      
        // Find the h1 heading text
        const h1Locator = page.locator('h1.p-name.article-title');
        const h1Text = await h1Locator.textContent();
    
        await expect(h1Locator).toBeVisible();
    
        const trimmedh1Text = h1Text?.trim();
      
        // Ensure the title matches the h1 heading content
        expect(mainTitle).toBe(trimmedh1Text);
    });
});
