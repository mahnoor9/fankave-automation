import type { Page } from "@playwright/test";
import {
    selectVideo,
    captureButton,
    stopcaptureButton,
    continueButton,
    enterName,
    enterEmail,
    approveButton,
} from "../locators/autodeskVideo.locators";

export async function recordVideo(page: Page) {
    await page.locator(selectVideo).click()
}
export async function startRecording(page: Page) {
    await page.keyboard.press('Tab')
    await page.locator(captureButton).click()
}
export async function stopRecording(page: Page) {
    await page.locator(stopcaptureButton).click();
}
export async function continueForward(page: Page) {
    await page.locator(continueButton).click();
}
export async function nameFeild(page: Page) {
    await page.locator(enterName).click();
    await page.type("#fk-name", "Saad");
}
export async function emailFeild(page: Page) {
    await page.locator(enterEmail).click();
    await page.type("#fk-email", "test@emumba.com");
}
export async function approveRecording(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/autodesk/publish`

        ),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    return (await response.json());
}