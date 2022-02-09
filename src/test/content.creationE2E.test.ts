import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../main/adminSide/tasks/adminLogin.tasks';
import { searchautodesk } from '../main/adminSide/tasks/adminSearchautodesk.actions';
import { recordAudio } from '../main/userSide/tasks/recordAudio.tasks';
import { autodeskPhototask } from '../main/userSide/content.creation/tasks/autodeskPhoto.tasks';
import { autodeskUploadtask } from '../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from '../main/userSide/content.creation/tasks/autodeskVideo.tasks';


let createdAudioID = ''
let createdVideoID = ''
let createdUploadID = ''

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoPhoto: any = await autodeskPhototask(page);
  createdAudioID= autoPhoto.data.id
  console.log(autoPhoto)
});

test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoImage: any = await autodeskUploadtask(page);
  createdUploadID= autoImage.data.id
  console.log(autoImage)
});

test('Should create a video', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoVideo: any = await autodeskVideotask(page);
  createdVideoID= autoVideo.data.id
  console.log(autoVideo)
});

test('should recieve the all record from the admin side', async ({ browser }) => {
  let page = await browser.newPage();
  await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
  await googleSignIn(page);
  let dataIDs = 
  await searchautodesk(page, 'Autodesk IT')
  console.log(dataIDs)
  expect(dataIDs).toContain(createdAudioID) 
  expect(dataIDs).toContain(createdVideoID)
  expect(dataIDs).toContain(createdUploadID)
});