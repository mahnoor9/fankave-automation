import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../../main/adminSide/tasks/adminLogin.tasks';
import { searchFankave } from '../../main/adminSide/tasks/adminSearchFankave.actions';
import { recordAudio } from '../../main/userSide/everlaw.testimonail/tasks/recordAudio.tasks';
import { recordVideo } from '../../main/userSide/everlaw.testimonail/tasks/recordVideo.task';
import { adminSide } from '../JSONtestdata/everlaw.json'
import { userSide } from '../JSONtestdata/everlaw.json'

let createdAudioID = ''
let createdVideoId = ''

test('should add a new audio from the user side', async ({ page }) => {
  
  await page.goto(userSide.URL);
  let response: any = await recordAudio(page);
  createdAudioID = response.data.id
  console.log(response);
});

test('should add a new Video from the user side', async ({ page }) => {
  await page.goto(userSide.URL);
  let recording: any = await recordVideo(page);
  createdVideoId = recording.data.id
  console.log(recording)
});

test('should recieve the content record from the admin side', async ({ browser }) => {

  let page = await browser.newPage();
  await page.goto(adminSide.URL);
  await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
  let dataIDs =
  await searchFankave(page, adminSide.searchTestimonial)
  console.log(dataIDs)
  expect(dataIDs).toContain(createdAudioID)
  expect(dataIDs).toContain(createdVideoId)
}); 

//adminSide.negativeTestData
//createdAudioID