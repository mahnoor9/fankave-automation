import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { tweetAuto } from '../../../main/userSide/content.creation/tasks/autodeskTweet.tasks'
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';


test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
});

test('Should Capture a Photo and Tweet it', async ({ page }) => {
  await demoPhototask(page, "Tester", "test@emumba.com", "Testing", "Test");
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Upload a Photo and Tweet it', async ({ page }) => {
    await demoUploadtask(page, "Tester", "test@emumba.com", "Testing", "Test");
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});

test('Should Capture a Video and Tweet it', async ({ page }) => {
  await demoVideotask(page, "Tester", "test@emumba.com", "Testing", "Test");
  let autotweet = await tweetAuto(page, "Test_Fank", "Test1234");
  expect(autotweet.toLocaleLowerCase()).toContain("posted on twitter")
});