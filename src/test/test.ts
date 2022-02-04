import { test, expect, Page } from '@playwright/test';
import { googleSignIn } from '../main/adminSide/tasks/adminLogin.tasks';
import { recordAudio } from '../main/userSide/tasks/recordAudio.tasks';
import { recordVideo } from '../main/userSide/tasks/recordVideo.task';

  test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  let response = await recordAudio(page);
  console.log(JSON.stringify(response))
  await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
  await googleSignIn (page);
  

});

  // //test('should add a new Video from the user side', async ({ page }) => {
  //   await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  //    let recording = await recordVideo(page);
  //   console.log(recording)
  //   });

  // test('should click login using google account', async ({ page }) => {
  //   await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
  //    let SignIn = await googleSignIn (page);
  //   console.log(SignIn)
  //   });