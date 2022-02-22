import { Page } from "@playwright/test";
import { storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { recordVideo, startRecording, stopRecording, continueForward, nameFeild, emailFeild } from "../../content.creation/actions/autodeskVideo.actions";
import { approve } from "../actions/demo.actions";

export async function demoVideotask(page: Page, testName, testEmail, testStory, testTag) {
  try {
    await recordVideo(page)
    await startRecording(page);
    await page.waitForTimeout(13000)
    await stopRecording(page);
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