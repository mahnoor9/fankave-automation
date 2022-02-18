import { Page } from "@playwright/test";
import { takePhoto, capturePhoto, continueForward, nameFeild, emailFeild, tagsFeild, storyFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { approve } from "../actions/demo.actions";

export async function demoPhototask(page: Page, testName, testEmail, testStory, testTag) {
  try {
    await takePhoto(page)
    await page.waitForTimeout(1000)
    await capturePhoto(page);
    await continueForward(page);
    await nameFeild(page, testName);
    await emailFeild(page, testEmail);
    await storyFeild(page, testStory);
    await tagsFeild(page, testTag);

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
}