import { Page } from "@playwright/test";
import { approveRecording, selectVideo, startRecording, stopRecording } from "../actions/recordVideo.actions";

export async function recordVideo(page: Page) {
   await selectVideo(page);
   await startRecording(page);
   await page.waitForTimeout(13000)
   await stopRecording(page);
   return await approveRecording(page);
}