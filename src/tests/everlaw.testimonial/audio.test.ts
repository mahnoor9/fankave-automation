// import { test, expect, Page, chromium, firefox } from '@playwright/test';
// import { selectAudio, startRecording, stopRecording, approveRecording } from "../../main/userSide/everlaw.testimonial/actions/recordAudio.actions"
// import { selectaudioButtoncheck, stoprecordingButtoncheck, recordButtoncheck, approveButtoncheck, thankyouMessegecheck } from "../../main/userSide/everlaw.testimonial/assertions/audioAssertion";

// test('should add a new audio from the user side', async ({ page }) => {
//   await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
//   await page.waitForTimeout(1000)
//   await selectaudioButtoncheck(page);
//   await selectAudio(page);
//   await recordButtoncheck(page);
//   await startRecording(page);
//   await page.waitForTimeout(5000)
//   await stopRecording(page);
//   await approveButtoncheck(page);
//   await approveRecording(page);
//   let respone = await thankyouMessegecheck(page);
//   console.log(respone)
// });