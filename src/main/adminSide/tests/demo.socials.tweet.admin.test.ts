import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../tasks/adminLogin.tasks";
import { searchautodesk } from "../tasks/adminSearchautodesk.actions";
import { tweetAdmin } from '../tasks/admintwitter.tasks';


test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page);
    await searchautodesk(page, 'Testimonial POC')
    let autotweet = await tweetAdmin(page);;
    expect(autotweet.toLowerCase()).toContain("shared on twittersuccess")
});