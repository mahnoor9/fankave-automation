import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { searchFankave } from "../../../main/adminSide/tasks/adminSearchFankave.actions";
import { linkedinAdminShare } from "../../../main/adminSide/tasks/adminLinkedin.tasks"
import { adminSide } from '../../JSONtestdata/demo.json'

test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    await searchFankave(page, adminSide.searchTestimonial)
    let autopost = await linkedinAdminShare(page, adminSide.textTOpost, adminSide.linkedinAccount, adminSide.linkedinPassword);;
    expect(autopost.toLowerCase()).toContain(adminSide.postMademessage)
    console.log(autopost);
});