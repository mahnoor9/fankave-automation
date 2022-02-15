import { Page } from "@playwright/test";
import { uploadImage, uploadPhoto, continueForward, nameFeild, emailFeild, approveImage, uploadFile } from "../actions/autodeskUpload.actions";

export async function autodeskUploadtask(page: Page) {
  try {
    await uploadPhoto(page);
    await page.waitForTimeout(1000)
    await uploadFile(page);
    await continueForward(page);
    await nameFeild(page);
    await emailFeild(page);

    return await approveImage(page);
  }
  catch (e) {
    console.log(e)
  }
}