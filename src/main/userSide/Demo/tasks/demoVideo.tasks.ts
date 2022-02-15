import { Page } from "@playwright/test";
import { storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { recordVideo, startRecording, stopRecording, continueForward, nameFeild, emailFeild } from "../../content.creation/actions/autodeskVideo.actions";
import { approve } from "../actions/demo.actions";

export async function demoVideotask(page: Page) {
  try {
    await recordVideo(page)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    await continueForward(page);
    await nameFeild(page);
    await emailFeild(page);
    await storyFeild(page);
    await tagsFeild(page);

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
}