import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoVideotask } from '../tasks/demoVideo.tasks';

test('Should create a video', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoVideo = await demoVideotask(page);
  console.log(autoVideo)
});
