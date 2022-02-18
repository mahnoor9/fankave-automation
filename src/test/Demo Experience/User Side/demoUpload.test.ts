import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';


test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoImage = await demoUploadtask(page, "Tester", "test@emumba.com", "Testing", "Test");
  console.log(autoImage)
});