import { Page } from "@playwright/test";
import {
    approveButton,
    selectAudioButton,
    startRecordingButton,
    stopRecordingButton
} from "../locators.ts/recordAudio.locators";

export async function selectAudio(page: Page) {
    await page.locator(selectAudioButton).click()
}

export async function startRecording(page: Page) {
    await page.locator(startRecordingButton).click()
}
export async function stopRecording(page: Page) {
    await page.locator(stopRecordingButton).click()
}
export async function approveRecording(page: Page) {
    const [response]= await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`
           
        ),
        page.click(approveButton),
    ]);
    console.log(await response.json());
   // console.log(JSON.stringify(response.body()))
    return JSON.stringify(response.json());
}
