import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { uploadPhoto, uploadImage, uploadFile, continueForward, nameFeild, emailFeild, approveImage } from "../../main/userSide/content.creation/actions/autodeskUpload.actions";
import { selectuploadButtoncheck, retakeButtoncheck, uploadimageButtoncheck, approveButtoncheck, thankyouMessegecheck } from "../../main/userSide/content.creation/assertations/autodesksuploadAssertion";

test('Should Upload a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  await uploadPhoto(page);
  await page.waitForTimeout(2000);
  await uploadImage(page);
  await page.waitForTimeout(2000);
  await uploadFile(page);
  await page.waitForTimeout(2000);
  await continueForward(page);
  await page.waitForTimeout(2000);
  await nameFeild(page);
  await emailFeild(page);
  await page.waitForTimeout(2000);
  await approveImage(page);

  let autoImage = await thankyouMessegecheck(page);
  console.log(autoImage)
});