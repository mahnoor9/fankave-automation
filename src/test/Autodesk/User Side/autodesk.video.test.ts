import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskVideotask } from '../../../main/userSide/content.creation/tasks/autodeskVideo.tasks';
import { userSide } from '../../JSONtestdata/autodesk.json';

test('Should create a video', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoVideo = await autodeskVideotask(page, userSide.TestName, userSide.TestEmail);
  console.log(autoVideo)
});
