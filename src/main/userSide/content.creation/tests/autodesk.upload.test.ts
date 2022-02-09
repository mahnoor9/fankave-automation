import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskUploadtask } from '../tasks/autodeskUpload.tasks'

test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoImage = await autodeskUploadtask(page);
  console.log(autoImage)
});