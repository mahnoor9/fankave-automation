import { test, expect, Page } from '@playwright/test';
import { recordAudio } from '../main/userSide/tasks/recordAudio.tasks';
import { recordVideo } from '../main/userSide/tasks/recordVideo.task';

  //test('should add a new audio from the user side', async ({ page }) => {
  //await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  // await recordAudio(page);
  // console.log(JSON.stringify(response))
  //});

  test('should add a new Video from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
     let recording = await recordVideo(page);
    console.log(recording)
    });