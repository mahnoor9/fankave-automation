import { Page } from "@playwright/test";
import { approveRecording, selectAudio, startRecording, stopRecording } from "../actions/recordAudio.actions";

export async function recordAudio(page: Page) {
   await selectAudio(page);
   await startRecording(page);
   await page.waitForTimeout(10000)
   await stopRecording(page);
  await approveRecording(page);
  }