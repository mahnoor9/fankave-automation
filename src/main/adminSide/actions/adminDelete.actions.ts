import { Page } from "@playwright/test";
import { deleteIcon } from "../locators/adminDelete.locators";
import { cards } from "../locators/adminSearch.locators";

export async function deleteiconClick(page: Page) {
    await (await page.$(deleteIcon)).click();
};

export async function getDataID(page: Page) {
    
    return await (await page.$(cards)).getAttribute("data-key")
    
}