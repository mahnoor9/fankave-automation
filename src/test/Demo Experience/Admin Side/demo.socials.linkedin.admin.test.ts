import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { searchFankave } from "../../../main/adminSide/tasks/adminSearchFankave.actions";
import { linkedinAdminShare } from "../../../main/adminSide/tasks/adminLinkedin.tasks"


test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page, 'aisha@fankave.com', '@Fankave2022.');
    await searchFankave(page, 'Testimonial POC')
    let autopost = await linkedinAdminShare(page, "Share Post On LinkedIn" ,"lahoyor941@alfaceti.com", "Fankave1223" );;
    expect(autopost.toLowerCase()).toContain("shared on linkedinsuccess")
    console.log(autopost);
});