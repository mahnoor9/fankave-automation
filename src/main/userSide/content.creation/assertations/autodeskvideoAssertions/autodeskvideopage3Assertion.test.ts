// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { recordVideo, startRecording, stopRecording } from "../../actions/autodeskVideo.actions";

// //button1 'continue'
//     test('Continue button' , async ({ page }) => {
//     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//     await recordVideo(page)
//     await page.waitForTimeout(2000)
//     await startRecording(page);
//     await page.waitForTimeout(10000)
//     await stopRecording(page);
//     const continueBtn = await page.$('div.actions > button');
//     const confirm = await continueBtn.isEnabled();
//     expect (confirm).toBeTruthy();
//     const visibility = await continueBtn.isVisible();
//     expect (visibility).toBeTruthy();
//     });

// //button2 'Re-record'
//     test('Rerecord button' , async ({ page }) => {
//     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//     await recordVideo(page)
//     await page.waitForTimeout(2000)
//     await startRecording(page);
//     await page.waitForTimeout(10000)
//     await stopRecording(page);
//     const rerecordBtn = await page.$('div.fk-video-preview-container > button');
//     const confirm = await rerecordBtn.isEnabled();
//     expect (confirm).toBeTruthy();
//     const visibility = await rerecordBtn.isVisible();
//     expect (visibility).toBeTruthy();
//     });

// //button3 'confirm Re-record'
//     test('Rerecord button' , async ({ page }) => {
//     await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
//     await recordVideo(page)
//     await page.waitForTimeout(2000)
//     await startRecording(page);
//     await page.waitForTimeout(10000)
//     await stopRecording(page);
//     const rerecordBtn = await page.$('div.fk-video-preview-container > button');
//     const confirm = await rerecordBtn.isEnabled();
//     expect (confirm).toBeTruthy();
//     const visibility = await rerecordBtn.isVisible();
//     expect (visibility).toBeTruthy();
//     });