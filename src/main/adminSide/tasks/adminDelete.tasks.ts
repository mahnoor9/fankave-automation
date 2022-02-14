import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { deleteiconClick, getDataID } from "../actions/adminDelete.actions"

export async function deleteAdmin(page: Page) {
    try {
        await deleteiconClick(page);
    }
    catch (e) {
        console.log(e)
    }
}

export async function deleteIDget(page: Page) {
    try {
        await page.waitForTimeout(1000);
        let deletedID = await getDataID(page);
        console.log(deletedID);
        return deletedID;
    }
    catch (e) {
        console.log(e)
    }
}