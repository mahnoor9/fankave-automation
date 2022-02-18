import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../../main/adminSide/tasks/adminLogin.tasks';
import { searchFankave } from '../../main/adminSide/tasks/adminSearchFankave.actions';
import { autodeskPhototask } from '../../main/userSide/content.creation/tasks/autodeskPhoto.tasks';
import { autodeskUploadtask } from '../../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from '../../main/userSide/content.creation/tasks/autodeskVideo.tasks';
import { adminSide } from '../JSONtestdata/autodesk.json';
import { userSide } from '../JSONtestdata/autodesk.json';

let createdAudioID = ''
let createdVideoID = ''
let createdUploadID = ''

test('Should capture a photo', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoPhoto: any = await autodeskPhototask(page, userSide.TestName, userSide.TestEmail);
  createdAudioID = autoPhoto.data.id
  console.log(autoPhoto)
});

test('Should Upload a photo', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoImage: any = await autodeskUploadtask(page, userSide.TestName, userSide.TestEmail);
  createdUploadID = autoImage.data.id
  console.log(autoImage)
});

test('Should create a video', async ({ page }) => {
  await page.goto(userSide.URL);
  let autoVideo: any = await autodeskVideotask(page, userSide.TestName, userSide.TestEmail);
  createdVideoID = autoVideo.data.id
  console.log(autoVideo)
});

test('should recieve the all record from the admin side', async ({ browser }) => {
  let page = await browser.newPage();
  await page.goto(adminSide.URL);
  await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
  let dataIDs =
    await searchFankave(page, adminSide.searchAutodesk)
  console.log(dataIDs)
  expect(dataIDs).toContain(createdAudioID)
  expect(dataIDs).toContain(createdVideoID)
  expect(dataIDs).toContain(createdUploadID)
});