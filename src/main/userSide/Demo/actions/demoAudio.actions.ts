import type { Page } from "@playwright/test";
import { democontinueButton, demostartRecordingButton, demostopRecordingButton } from "../locators/demoAudio.locators";

export async function stopRecording(page: Page) {
    await page.waitForSelector(demostopRecordingButton)
    await page.click(demostopRecordingButton)
}

export async function startRecording(page: Page) {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.waitForSelector(demostartRecordingButton)
    await page.click(demostartRecordingButton)
}

export async function continueButton(page: Page) {
    await page.waitForSelector(democontinueButton)
    await page.click(democontinueButton)

}

