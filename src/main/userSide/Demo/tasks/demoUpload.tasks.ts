import { Page } from "@playwright/test";
import { storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { uploadImage, uploadPhoto, continueForward, nameFeild, emailFeild, uploadFile } from "../../content.creation/actions/autodeskUpload.actions";
import { approve } from "../actions/demo.actions"

export async function demoUploadtask(page: Page) {
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
    await storyFeild(page);
    await tagsFeild(page);
    await page.waitForTimeout(1000);

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
}