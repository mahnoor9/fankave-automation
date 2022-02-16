import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAuto } from '../../content.creation/tasks/autodeskTweet.tasks'
import { demoPhototask } from '../tasks/demoPhoto.tasks';
import { demoUploadtask } from '../tasks/demoUpload.tasks';
import { demoVideotask } from '../tasks/demoVideo.tasks';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
});

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await demoPhototask(page);
  let autotweet = await tweetAuto(page);
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
    await demoUploadtask(page);
  let autotweet = await tweetAuto(page);
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Capture a Video and Tweet it', async ({ page }) => {
  await demoVideotask(page);
  let autotweet = await tweetAuto(page);
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});