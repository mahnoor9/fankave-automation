import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { recordAudio } from '../../../main/userSide/everlaw.testimonail/tasks/recordAudio.tasks';
import { userSide } from '../../JSONtestdata/everlaw.json'

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto(userSide.URL);
  let respone = await recordAudio(page);
  console.log(respone)
});