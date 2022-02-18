import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAuto } from '../../../main/userSide/content.creation/tasks/autodeskTweet.tasks'
import { autodeskPhototask } from "../../../main/userSide/content.creation/tasks/autodeskPhoto.tasks"
import { autodeskUploadtask } from '../../../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from "../../../main/userSide/content.creation/tasks/autodeskVideo.tasks";
import { userSide } from '../../JSONtestdata/autodesk.json';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
});

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await autodeskPhototask(page, userSide.TestName, userSide.TestEmail);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
  await autodeskUploadtask(page, userSide.TestName, userSide.TestEmail);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});


test('Should Capture a Video and Tweet it', async ({ page }) => {
  await autodeskVideotask(page, userSide.TestName, userSide.TestEmail);
  let autotweet = await tweetAuto(page, userSide.twitterAccount, userSide.twitterPassword);
  expect(autotweet.toLocaleLowerCase()).toContain(userSide.tweetPostedmessage)
});