import { Page } from "@playwright/test";
import { uploadImage, uploadPhoto, continueForward, nameFeild, emailFeild, approveImage, uploadFile } from "../actions/autodeskUpload.actions";

export async function autodeskUploadtask(page: Page) {
  try {
    await uploadPhoto(page);
    await page.waitForTimeout(1000);
    await uploadImage(page);
    await page.waitForTimeout(1000);
    await uploadFile(page);
    await page.waitForTimeout(1000);
    await continueForward(page);
    await page.waitForTimeout(1000);
    await nameFeild(page);
    await emailFeild(page);
    await page.waitForTimeout(1000);

    return await approveImage(page);
  }
  catch (e) {
    console.log(e)
  }
}