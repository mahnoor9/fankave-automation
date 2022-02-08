import { Page } from "@playwright/test";
import { clearSearchField, enterSearchText, getDataIDs } from "../actions/adminSearch.actions";


export async function searchTestimonial(page: Page, text: string) {
    try {

        await clearSearchField(page)
        await enterSearchText(page, text)
        await page.waitForLoadState()
        return await getDataIDs(page)

    }

    catch (e) {
        console.log(e)
    }

}