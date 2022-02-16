import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../main/adminSide/tasks/adminLogin.tasks';
import { searchTestimonial } from '../main/adminSide/tasks/adminSearcheverlaw.task';
import { demorecordAudio } from '../main/userSide/Demo/tasks/demoAudio.tasks';
import { demoaudioTestimonialtask } from '../main/userSide/Demo/tasks/demoaudioTestimonial.tasks';
import { demoPhototask } from '../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../main/userSide/Demo/tasks/demoVideo.tasks';
import { demovideoTestimonialtask } from '../main/userSide/Demo/tasks/demovideoTestimonial.tasks';

let createdAudioTestimonialID = '';
let createdVideoTestimonialID = '';
let createdVideoID = '';
let createdAudioID = '';
let createdPhotoID = '';
let createdImageID = '';

test('should add a new audio from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response = await demorecordAudio(page);
    createdAudioID = response.data.id;
    console.log(response);
});

test('should add a new video from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response: any = await demoVideotask(page);
    createdVideoID = response.data.id;
    console.log(response);
});

test('should add a new Photo from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response: any = await demoPhototask(page);
    createdPhotoID = response.data.id;
    console.log(response);
});

test('should add a new Uploaded Image from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response: any = await demoUploadtask(page);
    createdImageID = response.data.id;
    console.log(response);
});

test('should add a new Audio Testimonial from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response: any = await demoaudioTestimonialtask(page);
    createdAudioTestimonialID = response.data.id;
    console.log(response);
});

test('should add a new Video Testimonial from the user side', async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
    let response: any = await demovideoTestimonialtask(page);
    createdVideoTestimonialID = response.data.id;
    console.log(response);
});

test('should recieve the all record from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page);
    let dataIDs =
      await searchTestimonial(page, 'Testimonial POC')
    console.log(dataIDs)
    expect(dataIDs).toContain(createdAudioID)
    expect(dataIDs).toContain(createdVideoID)
    expect(dataIDs).toContain(createdImageID)
    expect(dataIDs).toContain(createdPhotoID)
    expect(dataIDs).toContain(createdAudioTestimonialID)
    expect(dataIDs).toContain(createdVideoTestimonialID)
  });