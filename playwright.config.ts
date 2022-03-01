import { devices, PlaywrightTestConfig } from '@playwright/test';
// const config: PlaywrightTestConfig = {
//   use: {
//     headless: false,
//     viewport: { width: 1280, height: 720 },
//     ignoreHTTPSErrors: true,
//     permissions: ['microphone']


//   },
// };
// playwright.config.ts
const config: PlaywrightTestConfig = {
  timeout: 300 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
  },
  projects: [

    // //For a Simulated IPhone Chrome
    // {
    //   name: 'iPhone 11',
    //   use: {
    //     browserName: 'chromium', permissions: ['microphone', 'camera'], headless: false, ...devices['iPhone 11'], }
    // },

    // //For a Simulated Android Chrome
    // {
    //   name: 'Galaxy S8',
    //   use: {
    //    browserName: 'chromium', permissions: ['microphone', 'camera'], headless: false, ...devices['Galaxy S8'] }
    // },

    // For Desktop Windows Chrome
    {
      
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], permissions: ['microphone', 'camera'], headless: false, launchOptions: { args: ['--disable-web-security', '--allow-running-insecure-content'] } }

    },


    // // For Desktop MS Edge
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Microsoft Edge'], channel: 'msedge', permissions: ['microphone', 'camera'], headless: false, launchOptions: { args: ['--disable-web-security', '--allow-running-insecure-content'] } }

    // },


    //For Desktop Windows FireFox
    // {
      
    //     name: 'firefox',
    //     use: { ...devices['Desktop Firefox'], headless: false, launchOptions: { firefoxUserPrefs: {'media.navigator.streams.fake':true}, args: ['--disable-web-security', '--allow-running-insecure-content'] } },

    // }

  ]
  // , reporter: [['experimental-allure-playwright'],]
};
export default config;