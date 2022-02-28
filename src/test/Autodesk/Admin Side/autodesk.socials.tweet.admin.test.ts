import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { searchFankave } from "../../../main/adminSide/tasks/adminSearchFankave.actions";
import { tweetAdmin } from '../../../main/adminSide/tasks/admintwitter.tasks';
import { adminSide } from '../../JSONtestdata/autodesk.json';

test('should tweet the latest media sent by a user from the admin side', async ({ browser }) => {
    let page = await browser.newPage();
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    await searchFankave(page, adminSide.searchAutodesk)
    let autotweet = await tweetAdmin(page, adminSide.textTOtweet, adminSide.twitterAccount, adminSide.twitterPassword);
    expect(autotweet.status).toEqual(200);
});