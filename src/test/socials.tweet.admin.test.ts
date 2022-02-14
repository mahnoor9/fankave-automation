import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../main/adminSide/tasks/adminLogin.tasks";
import { searchautodesk } from "../main/adminSide/tasks/adminSearchautodesk.actions";
import { tweetAdmin } from '../main/adminSide/tasks/admintwitter.tasks';


test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto('https://dev.social.fankave.com/admin/login?org=fankave.com');
    await googleSignIn(page);
    await searchautodesk(page, 'Autodesk IT')
    let autotweet = await tweetAdmin(page);;
    expect(autotweet.toLowerCase()).toContain("shared on twittersuccess")
});