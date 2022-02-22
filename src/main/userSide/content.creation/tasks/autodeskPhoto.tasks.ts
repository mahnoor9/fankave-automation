import { Page } from "@playwright/test";
import { takePhoto, capturePhoto, continueForward, nameFeild, emailFeild, approvePhoto } from "../actions/autodeskPhoto.actions";

export async function autodeskPhototask(page: Page, testName, testEmail) {
  try {
    await takePhoto(page)
    await capturePhoto(page);
    await page.waitForTimeout(1000)
    await continueForward(page);
    await nameFeild(page, testName);
    await emailFeild(page, testEmail);

    return await approvePhoto(page);
  }
  catch (e) {
    console.log(e)
  }
}