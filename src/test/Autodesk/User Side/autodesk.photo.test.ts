import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskPhototask } from '../../../main/userSide/content.creation/tasks/autodeskPhoto.tasks'
import { userSide } from '../../JSONtestdata/autodesk.json';

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoPhoto = await autodeskPhototask(page, userSide.TestName, userSide.TestEmail);
  console.log(autoPhoto)
});
