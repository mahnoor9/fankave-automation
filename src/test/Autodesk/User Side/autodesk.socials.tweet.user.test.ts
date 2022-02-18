import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAuto } from '../../../main/userSide/content.creation/tasks/autodeskTweet.tasks'
import { autodeskPhototask } from "../../../main/userSide/content.creation/tasks/autodeskPhoto.tasks"
import { autodeskUploadtask } from '../../../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from "../../../main/userSide/content.creation/tasks/autodeskVideo.tasks";

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
});

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await autodeskPhototask(page, "tester", "test@emumba.com" );
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
  await autodeskUploadtask(page, "tester", "test@emumba.com");
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});


test('Should Capture a Video and Tweet it', async ({ page }) => {
  await autodeskVideotask(page, "tester", "test@emumba.com");
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});