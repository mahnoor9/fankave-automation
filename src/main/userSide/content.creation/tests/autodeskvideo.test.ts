import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskVideotask } from '../tasks/autodeskVideo.tasks';

test('Should create a video', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoVideo = await autodeskVideotask(page);
  console.log(autoVideo)
});
