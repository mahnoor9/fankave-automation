import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAutodesk } from '../main/userSide/content.creation/tasks/autodeskTweet.tasks'
import { autodeskPhototask } from "../main/userSide/content.creation/tasks/autodeskPhoto.tasks"
import { autodeskUploadtask } from '../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from "../main/userSide/content.creation/tasks/autodeskVideo.tasks";

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  });

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await autodeskPhototask(page);
  let autotweet = await tweetAutodesk(page);
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
 await autodeskUploadtask(page);
 let autotweet = await tweetAutodesk(page);
 expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});


test('Should Capture a Video and Tweet it', async ({ page }) => {
 await autodeskVideotask(page);
 let autotweet = await tweetAutodesk(page);
 expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});