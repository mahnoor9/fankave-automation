import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';

test('Should create a video', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoVideo = await demoVideotask(page, "Tester", "test@emumba.com", "Testing", "Test");
  console.log(autoVideo)
});
