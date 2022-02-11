import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { deleteiconClick, getDataID } from "../actions/adminDelete.actions"

export async function deleteAdmin(page: Page) {
    try {
        await page.waitForTimeout(1000);
        let deletedID = await getDataID(page);
        await page.reload({timeout: 40000 , waitUntil: 'domcontentloaded'})
        await deleteiconClick(page);
        return deletedID;
        }
    catch (e) {
        console.log(e)
    }
}