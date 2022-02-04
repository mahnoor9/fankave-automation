import type { Page } from "@playwright/test";
import {
    approveButton,
    selectVideoButton,
    startRecordingButton,
    stopRecordingButton,
    bodyClick
} from "../locators.ts/recordVideo.locators";

export async function selectVideo(page: Page) {
    await page.locator(selectVideoButton).click()
}
export async function pageClick(page: Page) {
    await page.locator(bodyClick).click()
}
export async function startRecording(page: Page) {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
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
    return JSON.stringify(await response.json());
}