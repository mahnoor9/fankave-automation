import { Page } from "@playwright/test";
import { editCLick, editText, getTranscribedText, saveCLick } from '../actions/adminTranscribe.actions'
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

export async function editTranscribedText(page: Page) {
    try {
        await page.waitForSelector(firstCard);
        await editCLick(page);
        await page.waitForTimeout(2000);
        await editText(page);
        await page.waitForTimeout(1000);
        await saveCLick(page);
        }
    catch (e) {
        console.log(e)
    }
}