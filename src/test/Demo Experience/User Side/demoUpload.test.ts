import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test('Should Upload a photo', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoImage = await demoUploadtask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  console.log(autoImage)
});