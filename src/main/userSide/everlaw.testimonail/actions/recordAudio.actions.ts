import { Page } from "@playwright/test";
import {
    approveButton,
    selectAudioButton,
    startRecordingButton,
    stopRecordingButton
} from "../locators/recordAudio.locators";

export async function selectAudio(page: Page) {
    await page.waitForSelector(selectAudioButton)
    await page.locator(selectAudioButton).click()
}

export async function startRecording(page: Page) {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.waitForSelector(startRecordingButton)
    await page.click(startRecordingButton)
}
export async function stopRecording(page: Page) {
    await page.click(stopRecordingButton)
}
export async function approveRecording(page: Page) {
    const [response]: any = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`

        ),
        page.click(approveButton),
    ]);
    return (await response.json());
}
