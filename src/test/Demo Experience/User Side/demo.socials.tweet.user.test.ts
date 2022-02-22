import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAuto } from '../../../main/userSide/content.creation/tasks/autodeskTweet.tasks'
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test.beforeEach(async ({ page }) => {
  await page.goto(userSide.URL);
});

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await demoPhototask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
    await demoUploadtask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});

test('Should Capture a Video and Tweet it', async ({ page }) => {
  await demoVideotask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});