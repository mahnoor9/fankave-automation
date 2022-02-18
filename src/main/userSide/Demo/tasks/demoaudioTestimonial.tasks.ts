import { Page } from "@playwright/test";
import { getItrations, thankyouCheck, approve, selectaudioclick, sendRecording, startRecording, stopRecording, emailFeild, testimonialQuestion } from "../actions/demoaudioTestimonial.actions"

export async function demoaudioTestimonialtask(page: Page, testEmail) {
    try {

        await selectaudioclick(page);
        
        let i = await getItrations(page);
        await page.keyboard.press("Tab");
        let loop = 0;
        do {
        await page.keyboard.press("Tab");
        await page.waitForTimeout(1000);
        await startRecording(page);
        await testimonialQuestion(page);
        await page.waitForTimeout(7000);
        await page.keyboard.press("Tab");
        await stopRecording(page);
        await approve(page);
        loop++;
        } while (loop < i)
        await emailFeild(page, testEmail);
        await sendRecording(page);
        let check = await thankyouCheck(page);
        return check
    }
    catch (e) {
      console.log(e)
    }
  }