import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskUploadtask } from '../../../main/userSide/content.creation/tasks/autodeskUpload.tasks'
import { userSide } from '../../JSONtestdata/autodesk.json';

test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoImage = await autodeskUploadtask(page, userSide.TestName, userSide.TestEmail);
  console.log(autoImage)
});