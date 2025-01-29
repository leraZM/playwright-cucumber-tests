import { defineConfig } from '@playwright/test';
import { BASE_URL_API } from './support/constants';

export default defineConfig({
  testDir: './tests', // Set the test directory
  //outputDir: './api-report', // Set the output directory
  reporter: [['html', { outputFolder: 'api-report', open: 'on-failure' }]],
  use: {
    baseURL: `${BASE_URL_API}`,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
    trace: 'on-first-retry', // Enable tracing for debugging failed tests
    screenshot: 'only-on-failure', // Capture screenshots for UI tests on failure
    video: 'retain-on-failure', // Capture video (if applicable) on failure
  },
  timeout: 30000,
});
