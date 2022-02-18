import { Page } from "@playwright/test";
import { uploadPhoto, continueForward, nameFeild, emailFeild, approveImage, uploadFile } from "../actions/autodeskUpload.actions";

export async function autodeskUploadtask(page: Page, testName, testEmail) {
  try {
    await uploadPhoto(page);
    await page.waitForTimeout(1000)
    await uploadFile(page);
    await continueForward(page);
    await nameFeild(page, testName);
    await emailFeild(page, testEmail);

    return await approveImage(page);
  }
  catch (e) {
    console.log(e)
  }
}