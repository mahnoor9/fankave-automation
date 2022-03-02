import { Page } from "@playwright/test";
import { editButton, saveButton, textArea, transcribedText } from "../locators/adminDelete.locators";

export async function getTranscribedText (page: Page) {
    await page.waitForSelector(transcribedText);
    return await (await page.$(transcribedText)).innerText();
}

export async function editCLick(page: Page) {
    await page.waitForSelector(editButton);
    await (await page.$(editButton)).click();
}

export async function editText(page: Page) {
    await page.waitForSelector(textArea);
    await (await page.$(textArea)).click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.type(textArea, "Transcribe Text Edit Test")
}

export async function saveCLick(page: Page) {
    await page.waitForSelector(saveButton);
    await (await page.$(saveButton)).click();
}