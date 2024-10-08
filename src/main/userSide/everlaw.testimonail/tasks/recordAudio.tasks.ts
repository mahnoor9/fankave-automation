import { Page } from "@playwright/test";
import { approveRecording, selectAudio, startRecording, stopRecording } from "../actions/recordAudio.actions";

export async function recordAudio(page: Page) {
  try {

    await selectAudio(page);
    await startRecording(page);
    await page.waitForTimeout(13000)
    await stopRecording(page);

    return await approveRecording(page);
  }
  catch (e) {
    console.log(e)
  }
};
