import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks'
import { userSide } from '../../JSONtestdata/demo.json'

test('Should capture a photo', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoPhoto = await demoPhototask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  console.log(autoPhoto)
});
