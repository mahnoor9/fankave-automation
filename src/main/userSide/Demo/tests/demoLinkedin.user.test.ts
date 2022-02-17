import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { linkedinShareAuto } from '../tasks/demoLinkedin.user.tasks'
import { demoPhototask } from '../tasks/demoPhoto.tasks';
import { demoUploadtask } from '../tasks/demoUpload.tasks';
import { demoVideotask } from '../tasks/demoVideo.tasks';
import { demorecordAudio } from '../tasks/demoAudio.tasks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  });
  
//   test('Should Capture a Photo and Share it on LinkedIN', async ({ page }) => {
//     await demoPhototask(page);
//     await linkedinShareAuto(page);
//   });

  test('Should Upload a Photo and Share it on LinkedIN', async ({ page }) => {
    await demoUploadtask(page);
    await linkedinShareAuto(page);
  });

//   test('Should Capture a Video and Share it on LinkedIN', async ({ page }) => {
//     await demoVideotask(page);
//     await linkedinShareAuto(page);
//   });

//   test('Should Record an Audio and Share it on LinkedIN', async ({ page }) => {
//     await demorecordAudio(page);
//     await linkedinShareAuto(page);
//   });