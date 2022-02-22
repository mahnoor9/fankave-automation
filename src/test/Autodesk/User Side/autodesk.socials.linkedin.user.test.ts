import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskPhototask } from '../../../main/userSide/content.creation/tasks/autodeskPhoto.tasks';
import { autodeskUploadtask } from '../../../main/userSide/content.creation/tasks/autodeskUpload.tasks';
import { autodeskVideotask } from '../../../main/userSide/content.creation/tasks/autodeskVideo.tasks';
import { linkedinShareAuto } from '../../../main/userSide/Demo/tasks/demoLinkedin.user.tasks'
import { userSide } from '../../JSONtestdata/autodesk.json'


test.beforeEach(async ({ page }) => {
    await page.goto(userSide.URL);
});

test('Should capture a photo', async ({ page }) => {
    await autodeskPhototask(page, userSide.TestName, userSide.TestEmail);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });
  
  test('Should Upload a photo', async ({ page }) => {
    await autodeskUploadtask(page, userSide.TestName, userSide.TestEmail);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });
  
  test('Should create a video', async ({ page }) => {
    await autodeskVideotask(page, userSide.TestName, userSide.TestEmail);
    let autopost = await linkedinShareAuto(page, userSide.linkedinAccount, userSide.linkedinPassword);
    expect(autopost.toLocaleLowerCase()).toContain(userSide.postMademessage)
  });