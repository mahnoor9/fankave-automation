import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { searchFankave } from "../../../main/adminSide/tasks/adminSearchFankave.actions";
import { tweetAdmin } from '../../../main/adminSide/tasks/admintwitter.tasks';


test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page, 'aisha@fankave.com', '@Fankave2022.');
    await searchFankave(page, 'Testimonial POC')
    let autotweet = await tweetAdmin(page, "Test Tweet 123", "Test_fank", "Test1234");;
    expect(autotweet.toLowerCase()).toContain("shared on twittersuccess")
});