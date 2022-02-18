import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demorecordAudio } from '../../../main/userSide/Demo/tasks/demoAudio.tasks';


test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let respone = await demorecordAudio(page, "Tester", "test@emumba.com", "Testing", "Test");
  console.log(respone)
});