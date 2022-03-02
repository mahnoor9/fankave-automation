import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { getTexttoCheck } from '../../../main/adminSide/tasks/adminTranscribe.tasks';
import { googleSignIn } from "../../../main/adminSide/tasks/adminLogin.tasks";
import { adminSide } from '../../JSONtestdata/demo.json'
import { searchFankave } from '../../../main/adminSide/tasks/adminSearchFankave.actions';
import { sendAudio } from '../../../main/adminSide/tasks/sendAudioAPI.tasks';

test('should check the latest audio transcribing for the audio sent by a user from the admin side', async ({ browser }) => {
    
    await sendAudio();
    let page = await browser.newPage();
    await page.goto(adminSide.URL);
    await googleSignIn(page, adminSide.googleAccount, adminSide.googlePassword);
    await searchFankave(page, adminSide.searchTestimonial)
    await page.waitForTimeout(1000);
    let texttoCheck = await getTexttoCheck(page);
    console.log(texttoCheck);
    expect(texttoCheck).toContain("Hello, this is a test for transcribed text and this is the first testimonial for record audio feature.")
    
});

