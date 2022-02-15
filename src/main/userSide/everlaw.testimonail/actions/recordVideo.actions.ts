import type { Page } from "@playwright/test";
import {
    approveButton,
    selectVideoButton,
    startRecordingButton,
    stopRecordingButton,
} from "../locators/recordVideo.locators";

export async function selectVideo(page: Page) {
    await page.waitForSelector(selectVideoButton)
    await page.locator(selectVideoButton).click()
}

export async function startRecording(page: Page) {
    await page.keyboard.press('Tab')
    await page.waitForSelector(startRecordingButton)
    await page.locator(startRecordingButton).click()
}
export async function stopRecording(page: Page) {
    await page.waitForSelector(stopRecordingButton)
    await page.locator(stopRecordingButton).click()
}
export async function approveRecording(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`

        ),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    // console.log(JSON.stringify(response.body()))
    return await response.json();
}