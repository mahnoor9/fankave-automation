import  {Page}  from "@playwright/test";
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
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
   await page.keyboard.press('Enter')
  await page.click(startRecordingButton)
}
export async function stopRecording(page: Page) {
    await page.click(stopRecordingButton)
}
export async function approveRecording(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`

        ),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    return JSON.stringify(response.json());
}
