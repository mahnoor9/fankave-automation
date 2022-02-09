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
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] , permissions: ['microphone','camera'], headless: false, screenshot:"on", trace:"retain-on-failure"},
    }]
    , reporter:[[ 'experimental-allure-playwright' ]]
};
export default config;