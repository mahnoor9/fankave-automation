import { Page } from "@playwright/test";
import { getTranscribedText } from '../actions/adminTranscribe.actions'
import { firstCard } from "../locators/adminDelete.locators";

export async function getTexttoCheck(page: Page) {
    try {
        await page.waitForSelector(firstCard);
        return await getTranscribedText(page);
        }
    catch (e) {
        console.log(e)
    }
}