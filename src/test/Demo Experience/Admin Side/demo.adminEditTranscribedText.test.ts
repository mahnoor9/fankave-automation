import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { editTranscribedText, getTexttoCheck } from '../../../main/adminSide/tasks/adminTranscribe.tasks';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { adminSide } from '../../JSONtestdata/demo.json'
import { searchFankave } from '../../../main/adminSide/tasks/adminSearchFankave.actions';
import { getTranscribedText } from '../../../main/adminSide/actions/adminTranscribe.actions';

test('should check the latest audio transcribing for the audio sent by a user from the admin side', async ({ browser }) => {
    
    let page = await browser.newPage();
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    await searchFankave(page, adminSide.searchTestimonial)
    await page.waitForLoadState;
    await editTranscribedText(page);
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
    await page.reload();
    let check = await getTranscribedText(page)
    expect(check).toContain("Transcribe Text Edit Test")
});
