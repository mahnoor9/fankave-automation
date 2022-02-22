import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demorecordAudio } from '../../../main/userSide/Demo/tasks/demoAudio.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto(userSide.URL);
  let respone = await demorecordAudio(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  console.log(respone)
});