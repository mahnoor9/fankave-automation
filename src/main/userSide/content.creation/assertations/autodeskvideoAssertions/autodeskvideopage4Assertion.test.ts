// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { recordVideo, startRecording, stopRecording, continueForward } from "../../actions/autodeskVideo.actions"

// test('Approve button' , async ({ page }) => {
//     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//     await recordVideo(page)
//     await page.waitForTimeout(2000)
//     await startRecording(page);
//     await page.waitForTimeout(10000)
//     await stopRecording(page);
//     await continueForward(page);
//     await page.waitForTimeout(2000)
//     const approveBtn = await page.$('div.actions > button');
//     const confirm = await approveBtn.isEnabled();
//     expect (confirm).toBeTruthy();
//     const visibility = await approveBtn.isVisible();
    // expect (visibility).toBeTruthy();
    // });