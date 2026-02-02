// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 1,
  worker: 3,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',

  projects: [
    {
      name: 'safari excecution',
      use: {

        //browserName: 'chromium',
        browserName: 'webkit',
        headless: true,
        screenshot: 'on',
        trace: 'on',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

      }
    },
    {
      name: 'chrome excecution',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'retain-on-failure',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permission: ['geolocation'],
        trace: 'retain-on-failure',
      }

    }
  ]

  ,

});

module.exports = config

