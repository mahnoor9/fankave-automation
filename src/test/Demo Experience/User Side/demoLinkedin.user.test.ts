import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { linkedinShareAuto } from '../../../main/userSide/Demo/tasks/demoLinkedin.user.tasks'
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';
import { demorecordAudio } from '../../../main/userSide/Demo/tasks/demoAudio.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test.beforeEach(async ({ page }) => {
    await page.goto(userSide.URL);
  });
  
  test('Should Capture a Photo and Share it on LinkedIN', async ({ page }) => {
    await demoPhototask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });

  test('Should Upload a Photo and Share it on LinkedIN', async ({ page }) => {
    await demoUploadtask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });

  test('Should Capture a Video and Share it on LinkedIN', async ({ page }) => {
    await demoVideotask(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });

  test('Should Record an Audio and Share it on LinkedIN', async ({ page }) => {
    await demorecordAudio(page, userSide.TestName, userSide.TestEmail, userSide.TestStory, userSide.TestTag);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });