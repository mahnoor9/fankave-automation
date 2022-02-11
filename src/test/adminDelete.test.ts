import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { deleteAdmin } from '../main/adminSide/tasks/adminDelete.tasks';
import { googleSignIn } from "../main/adminSide/tasks/adminLogin.tasks";
import { searchautodesk } from "../main/adminSide/tasks/adminSearchautodesk.actions";

test('should delete the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page);
    let allIDs = await searchautodesk(page, 'Autodesk IT')
    await page.waitForTimeout(1000);
    let autodelete = await deleteAdmin(page);
    console.log(allIDs);
    console.log(autodelete);
    // await page.waitForTimeout(2000);
    // if (allIDs == autodelete)
    // {
    //     console.log("test failed")
    // }
    // else
    // {
    //     console.log("test passed")
    // }

});