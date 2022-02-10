import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../main/adminSide/tasks/adminLogin.tasks';
import { searchTestimonial } from '../main/adminSide/tasks/adminSearcheverlaw.task';
import { recordAudio } from '../main/userSide/tasks/recordAudio.tasks';
import { recordVideo } from '../main/userSide/everlaw.testimonail/tasks/recordVideo.task';
// import data from "../test/JSONtestdata/"
let createdAudioID = ''
let createdVideoId =''
  
test('should add a new audio from the user side', async ({ page }) => {

  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
  let response:any = await recordAudio(page);
  createdAudioID=response.data.id
});

test('should add a new Video from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
   let recording: any = await recordVideo(page);
   createdVideoId = recording.data.id
   console.log(recording)
  });

test('should recieve the audio record from the admin side', async ({ browser }) => {
 
  let page = await browser.newPage();
  await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
  await googleSignIn(page);
  let dataIDs = 
  await searchTestimonial(page, 'Testimonial POC')
  console.log(dataIDs)
  expect(dataIDs).toContain(createdAudioID)
  expect(dataIDs).toContain(createdVideoId)
});