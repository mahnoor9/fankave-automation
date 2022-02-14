import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { searchforautodesk } from '../main/adminSide/actions/adminDelete.actions';
import { cards } from '../main/adminSide/locators/adminSearch.locators';
import { deleteAdmin, deleteIDget } from '../main/adminSide/tasks/adminDelete.tasks';
import { googleSignIn } from "../main/adminSide/tasks/adminLogin.tasks";

test('should delete the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page);
    await searchforautodesk(page, 'Autodesk IT')
    await page.waitForTimeout(1500);
    let autodelete = await deleteIDget(page);
    await page.waitForTimeout(1500);
    await deleteAdmin(page);
    await page.waitForSelector(cards)
    let allIDs = await page.$$eval(cards, inputs => { return inputs.map(input => input.getAttribute('data-key')) });
    console.log(allIDs);
    console.log(autodelete);
    (expect(allIDs).not.toContain(autodelete))

});