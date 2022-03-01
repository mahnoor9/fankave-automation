import { Page } from "@playwright/test";
import { transcribedText } from "../locators/adminDelete.locators";

export async function getTranscribedText (page: Page) {
    await page.waitForSelector(transcribedText);
    return await (await page.$(transcribedText)).innerText();
}