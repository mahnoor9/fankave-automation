import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoUploadtask } from '../tasks/demoUpload.tasks';


test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoImage = await demoUploadtask(page);
  console.log(autoImage)
});