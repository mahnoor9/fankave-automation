import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demorecordAudio } from '../tasks/demoAudio.tasks';

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let respone = await demorecordAudio(page);
  console.log(respone)
});