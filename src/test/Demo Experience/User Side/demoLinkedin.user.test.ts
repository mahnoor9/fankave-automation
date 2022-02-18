import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { linkedinShareAuto } from '../../../main/userSide/Demo/tasks/demoLinkedin.user.tasks'
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks';
import { demoUploadtask } from '../../../main/userSide/Demo/tasks/demoUpload.tasks';
import { demoVideotask } from '../../../main/userSide/Demo/tasks/demoVideo.tasks';
import { demorecordAudio } from '../../../main/userSide/Demo/tasks/demoAudio.tasks';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  });
  
  test('Should Capture a Photo and Share it on LinkedIN', async ({ page }) => {
    await demoPhototask(page, "Tester", "test@emumba.com", "Testing", "Test");
    let autopost = await linkedinShareAuto(page, "lahoyor941@alfaceti.com", "Fankave1223");
    expect(autopost.toLocaleLowerCase()).toContain("Posted On Linkedin")
  });

  test('Should Upload a Photo and Share it on LinkedIN', async ({ page }) => {
    await demoUploadtask(page, "Tester", "test@emumba.com", "Testing", "Test");
    let autopost = await linkedinShareAuto(page, "lahoyor941@alfaceti.com", "Fankave1223");
    expect(autopost.toLocaleLowerCase()).toContain("posted on linkedin")
  });

  test('Should Capture a Video and Share it on LinkedIN', async ({ page }) => {
    await demoVideotask(page, "Tester", "test@emumba.com", "Testing", "Test");
    let autopost = await linkedinShareAuto(page, "lahoyor941@alfaceti.com", "Fankave1223");
    expect(autopost.toLocaleLowerCase()).toContain("Posted On Linkedin")
  });

  test('Should Record an Audio and Share it on LinkedIN', async ({ page }) => {
    await demorecordAudio(page, "Tester", "test@emumba.com", "Testing", "Test");
    let autopost = await linkedinShareAuto(page, "lahoyor941@alfaceti.com", "Fankave1223");
    expect(autopost.toLocaleLowerCase()).toContain("Posted On Linkedin")
  });