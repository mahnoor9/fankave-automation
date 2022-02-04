import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { recordAudio } from '../main/userSide/everlaw.testimonail/tasks/recordAudio.tasks';
import { recordVideo } from '../main/userSide/everlaw.testimonail/tasks/recordVideo.task';

  test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  let respone = await recordAudio(page);
  console.log(respone)
  });

  test('should add a new Video from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
     let recording = await recordVideo(page);
     console.log(recording)
    });