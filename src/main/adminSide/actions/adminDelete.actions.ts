import { Page } from "@playwright/test";
import { deleteIcon } from "../locators/adminDelete.locators";
import { firstCard } from "../locators/adminDelete.locators";
import { cards } from "../locators/adminSearch.locators";
import { clearSearchField, enterSearchText, getDataIDs } from "../actions/adminSearch.actions";

export async function deleteiconClick(page: Page) {
    await (await page.$(deleteIcon)).click();
};

export async function getDataID(page: Page) {
    
    return await (await page.$(firstCard)).getAttribute("data-key")
    
}

export async function searchforautodesk(page: Page, text: string) {
    try {
        await clearSearchField(page)
        await enterSearchText(page, text)
        await page.keyboard.press('Enter')
    }

    catch (e) {
        console.log(e)
    }

}