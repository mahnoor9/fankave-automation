import { devices, PlaywrightTestConfig } from '@playwright/test';
// const config: PlaywrightTestConfig = {
//   use: {
//     headless: false,
//     viewport: { width: 1280, height: 720 },
//     ignoreHTTPSErrors: true,
//     permissions: ['microphone']
    
    
//   },
// };
const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] , permissions: ['microphone','camera'], headless: false, launchOptions:{args: ['--disable-web-security', '--allow-running-insecure-content' ]}}
    
      
    }]

};
export default config;