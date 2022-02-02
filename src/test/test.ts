import { test, expect, Page } from '@playwright/test';
import { recordAudio } from '../main/userSide/tasks/recordAudio.tasks';


  test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
   await recordAudio(page);
  // console.log(JSON.stringify(response))
  });



