import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { getTexttoCheck } from '../../../main/adminSide/tasks/adminTranscribe.tasks';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { adminSide } from '../../JSONtestdata/demo.json'
import { searchFankave } from '../../../main/adminSide/tasks/adminSearchFankave.actions';

test('should check the latest media transcribing for the media sent by a user from the admin side', async ({ browser }) => {
    
    let page = await browser.newPage();
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    await searchFankave(page, adminSide.searchTestimonial)
    await page.waitForTimeout(1000);
    let texttoCheck = await getTexttoCheck(page);
    console.log(texttoCheck);
    expect(texttoCheck).toContain("Testing testing one, two, three. Testing testing.")
    
});