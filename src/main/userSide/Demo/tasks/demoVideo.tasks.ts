import { Page } from "@playwright/test";
import { storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { recordVideo, startRecording, stopRecording, continueForward, nameFeild, emailFeild, approveRecording } from "../../content.creation/actions/autodeskVideo.actions";
import { approve } from "../actions/demo.actions";

export async function demoVideotask(page: Page) {
  try {
    await recordVideo(page)
    await page.waitForTimeout(1000)
    await startRecording(page);
    await page.waitForTimeout(5000)
    await stopRecording(page);
    await continueForward(page);
    await page.waitForTimeout(1000)
    await nameFeild(page);
    await emailFeild(page);
    await storyFeild(page);
    await tagsFeild(page);
    await page.waitForTimeout(1000)

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
}