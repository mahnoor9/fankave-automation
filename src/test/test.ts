import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskVideotask } from '../main/userSide/content.creation/tasks/autodeskVideo.tasks';
import { recordAudio } from '../main/userSide/everlaw.testimonail/tasks/recordAudio.tasks';
import { recordVideo } from '../main/userSide/everlaw.testimonail/tasks/recordVideo.task';
import { autodeskPhototask } from '../main/userSide/content.creation/tasks/autodeskPhoto.tasks'
import { autodeskUploadtask } from '../main/userSide/content.creation/tasks/autodeskUpload.tasks'

  // test('should add a new audio from the user side', async ({ page }) => {
  // await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  // let respone = await recordAudio(page);
  // console.log(respone)
  // });

  // test('should add a new Video from the user side', async ({ page }) => {
  //   await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  //    let recording = await recordVideo(page);
  //    console.log(recording)
  //   });

  // test('Should create a video', async ({ page }) => {
  //     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  //      let autoVideo = await autodeskVideotask(page);
  //      console.log(autoVideo)
  //     });

  test('Should capture a photo', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
     let autoPhoto = await autodeskPhototask(page);
     console.log(autoPhoto)
    });

  // test('Should Upload a photo', async ({ page }) => {
  //   await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  //    let autoImage = await autodeskUploadtask(page);
  //    console.log(autoImage)
  //   });