import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAutodesk } from '../main/userSide/content.creation/tasks/autodeskTweet.task'
import { autodeskPhototask } from "../main/userSide/content.creation/tasks/autodeskPhoto.tasks"
import { autodeskUploadtask } from '../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from '../main/userSide/content.creation/tasks/autodeskVideo.tasks';

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//   });

test('Should capture a photoand tweet it', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  await autodeskPhototask(page);
  let autotweet = await tweetAutodesk(page);
  console.log(autotweet)
});

// test('Should capture a photoand tweet it', async ({ page }) => {
//  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//  await autodeskUploadtask(page);
//  let autotweet = await tweetAutodesk(page);
//  console.log(autotweet)
// });

// test('Should capture a photoand tweet it', async ({ page }) => {
//  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//  await autodeskVideotask(page);
//  let autotweet = await tweetAutodesk(page);
//  console.log(autotweet)
// });
