import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test('Should create a video', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoVideo = await demoVideotask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  console.log(autoVideo)
});
