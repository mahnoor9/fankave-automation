import { Page } from "@playwright/test";
import { recordVideo, startRecording, stopRecording, continueForward, nameFeild, emailFeild, approveRecording } from "../actions/autodeskVideo.actions";

export async function autodeskVideotask(page: Page, testName, testEmail) {
  try {
    await recordVideo(page)
    await startRecording(page);
    await page.waitForTimeout(5000);
    await stopRecording(page);
    await continueForward(page);
    await nameFeild(page, testName);
    await emailFeild(page, testEmail);

    return await approveRecording(page);
  }
  catch (e) {
    console.log(e)
  }
}