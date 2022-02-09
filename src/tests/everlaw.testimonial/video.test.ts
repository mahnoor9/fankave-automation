// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { selectvideoButtoncheck, stoprecordButtoncheck, recordButtoncheck, retakeButtoncheck, approveButtoncheck, thankyouMessegecheck } from "../../main/userSide/everlaw.testimonial/assertions/videoAssertion" ;
// import { selectVideo, startRecording, stopRecording, approveRecording, tabfucntion, } from "../../main/userSide/everlaw.testimonial/actions/recordVideo.actions" ;

// test('should add a new Video from the user side', async ({ page }) => {
//   await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
//   await page.waitForTimeout(1000);
//   await selectvideoButtoncheck(page);
//   await selectVideo(page);
//   await page.waitForTimeout(1000);
//   await tabfucntion(page);
//   await page.waitForTimeout(1000);
//   await recordButtoncheck(page);
//   await startRecording(page);
//   await page.waitForTimeout(5000)
//   await stopRecording(page);
//   await retakeButtoncheck(page);
//   await approveButtoncheck(page);
//   await approveRecording(page);
//   let recording = await thankyouMessegecheck(page);
//   console.log(recording)
// });