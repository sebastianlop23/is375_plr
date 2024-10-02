const { devices } = require('@playwright/test');

module.exports = {
  // Automatically start the Express server before running tests
  webServer: {
    command: 'npm run start',           // Command to start the server (Ensure it matches your script)
    port: 3000,                         // Port where the server will be running
    reuseExistingServer: !process.env.CI,  // Reuse the server unless in CI environment
    timeout: 120 * 1000,                // Allow up to 2 minutes for the server to start
  },

  // Global test settings
  use: {
    baseURL: 'http://localhost:3000',   // Base URL for all tests
    headless: true,                     // Run tests in headless mode for CI efficiency
    screenshot: 'only-on-failure',      // Capture screenshots on failure
    video: 'retain-on-failure',         // Capture video on failure
    trace: 'on-first-retry',            // Record a trace on first retry to assist debugging
  },

  // Browsers to run tests against
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  // Reporter configuration
  reporter: [
    ['list'],                           // Console reporter: readable list output
    ['json', { outputFile: 'results/test-results.json' }],  // Store JSON results in results folder
  ],

  // Retry failed tests once before marking them as failed
  retries: 1,

  // Limit the maximum time allowed for a single test
  timeout: 60 * 1000,  // 1 minute per test
};
