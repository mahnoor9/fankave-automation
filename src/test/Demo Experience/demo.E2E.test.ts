import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from '../../main/adminSide/tasks/adminLogin.tasks';
import { searchFankave } from '../../main/adminSide/tasks/adminSearchFankave.actions';
import { demorecordAudio } from '../../main/userSide/Demo/tasks/demoAudio.tasks';
import { demoaudioTestimonialtaskE2E } from '../../main/userSide/Demo/tasks/demoaudioTestimonial.tasks';
import { demoPhototask } from '../../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../../main/userSide/Demo/tasks/demoVideo.tasks';
import { demovideoTestimonialtaskE2E } from '../../main/userSide/Demo/tasks/demovideoTestimonial.tasks';
import { userSide } from '../JSONtestdata/demo.json'
import { adminSide } from '../JSONtestdata/demo.json'

let createdAudioTestimonialID;
let createdVideoTestimonialID;
let createdVideoID = '';
let createdAudioID = '';
let createdPhotoID = '';
let createdImageID = '';
let videoTestimonialIterations;
let audioTestimonialIterations;

test('should add a new audio from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response = await demorecordAudio(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    createdAudioID = response.data.id;
    console.log(response);
});

test('should add a new video from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response: any = await demoVideotask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    createdVideoID = response.data.id;
    console.log(response);
});

test('should add a new Photo from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response: any = await demoPhototask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    createdPhotoID = response.data.id;
    console.log(response);
});

test('should add a new Uploaded Image from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response: any = await demoUploadtask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    createdImageID = response.data.id;
    console.log(response);
});

test('should add a new Audio Testimonial from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response: any = await demoaudioTestimonialtaskE2E(page, userSide.TestEmail);
    audioTestimonialIterations = response.length;
    createdAudioTestimonialID = response;
    console.log(response);
});

test('should add a new Video Testimonial from the user side', async ({ page }) => {
    await page.goto(userSide.URL);
    let response: any = await demovideoTestimonialtaskE2E(page, userSide.TestEmail);
    videoTestimonialIterations = response.length;
    createdVideoTestimonialID = response;
    console.log(response);
});

test('should recieve the all record from the admin side', async ({ page }) => {
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    let dataIDs =
    await searchFankave(page, adminSide.searchTestimonial)
    console.log(dataIDs)
    expect(dataIDs).toContain(createdAudioID)
    expect(dataIDs).toContain(createdVideoID)
    expect(dataIDs).toContain(createdImageID)
    expect(dataIDs).toContain(createdPhotoID)

    let i = 0;
    do {
    expect(dataIDs).toContain(createdAudioTestimonialID[i]);
    i++;
    } while (i < videoTestimonialIterations);

    let l = 0;
    do{
    expect(dataIDs).toContain(createdAudioTestimonialID[l])
    l++;
    } while (l < audioTestimonialIterations)
  });