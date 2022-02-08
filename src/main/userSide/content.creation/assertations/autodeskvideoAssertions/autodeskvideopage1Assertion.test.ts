// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { recordVideo } from "../../actions/autodeskVideo.actions";

// test('Video Record button' , async ({ page }) => {
// await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
// await recordVideo(page)
// await page.waitForTimeout(2000)
// const recordBtn = await page.$('div.fk-buttons-wrapper > button');
// const confirm = await recordBtn.isEnabled();
// expect (confirm).toBeTruthy();
// const visibility = await recordBtn.isVisible();
// expect (visibility).toBeTruthy();
// });