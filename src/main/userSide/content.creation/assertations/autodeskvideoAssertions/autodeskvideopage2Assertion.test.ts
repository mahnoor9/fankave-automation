// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { recordVideo, startRecording } from "../../actions/autodeskVideo.actions"  ;

// test('Stop Record button' , async ({ page }) => {
// await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
// await recordVideo(page)
// await page.waitForTimeout(2000)
// await startRecording(page);
// await page.waitForTimeout(10000)
// const stoprecordBtn = await page.$('div.fk-buttons-wrapper > button');
// const confirm = await stoprecordBtn.isEnabled();
// expect (confirm).toBeTruthy();
// const visibility = await stoprecordBtn.isVisible();
// expect (visibility).toBeTruthy();
// });