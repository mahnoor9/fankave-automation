import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { takePhoto, capturePhoto, continueForward, nameFeild, emailFeild, approvePhoto } from "../../main/userSide/content.creation/actions/autodeskPhoto.actions";
import { selectphotobuttoncheck, retakebuttoncheck, approvebuttoncheck, continuebuttoncheck, takephotobuttoncheck, thankyouMessegecheck,  } from "../../main/userSide/content.creation/assertations/autodeskpictureAssertion";

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  await selectphotobuttoncheck(page);
  await page.waitForTimeout(1000);
  await takePhoto(page);
  await page.waitForTimeout(1000);
  await takephotobuttoncheck(page);
  await capturePhoto(page);
  await page.waitForTimeout(5000);
  await continuebuttoncheck(page);
  await retakebuttoncheck(page);
  await continueForward(page);
  await page.waitForTimeout(3000)
  await nameFeild(page);
  await emailFeild(page);
  await page.waitForTimeout(1000)
  await approvebuttoncheck(page);
  await approvePhoto(page);
  let autoPhoto = await thankyouMessegecheck(page);
  console.log(autoPhoto)
});
