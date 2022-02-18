import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { recordVideo } from "../../../main/userSide/everlaw.testimonail/tasks/recordVideo.task"
import { userSide } from '../../JSONtestdata/everlaw.json'

test('should add a new Video from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  let recording = await recordVideo(page);
  console.log(recording)
});