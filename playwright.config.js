// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 2,
  timeout: 30 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: 'html',
  //reporter: [["line"], ["allure-playwright"]],



  use: {

    browserName: 'chromium',
    //browserName : 'webkit',
    headless: true,
    screenshot: 'retain-on-failure',
    trace: 'retain-on-failure',



    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

});

module.exports = config

