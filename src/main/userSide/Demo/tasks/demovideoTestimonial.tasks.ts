import { Page } from "@playwright/test";
import { getItrations, thankyouCheck, approve, selectvideoclick, sendRecording, startRecording, stopRecording, emailFeild, testimonialQuestion } from "../actions/demovideoTestimonial.actions"

export async function demovideoTestimonialtask(page: Page) {
    try {

        await selectvideoclick(page);
        
        let i = await getItrations(page);
        let loop = 0;
        do {
        await page.keyboard.press("Tab");
        await page.waitForTimeout(500);
        await page.keyboard.press("Tab");
        await page.waitForTimeout(500);
        await page.keyboard.press("Tab");
        await page.waitForTimeout(500);
        await page.keyboard.press("Tab");
        await page.waitForTimeout(500);
        await startRecording(page);
        await testimonialQuestion(page);
        await page.waitForTimeout(7000);
        await stopRecording(page);
        await approve(page);
        loop++;
        } while (loop < i)
        await emailFeild(page);
        await sendRecording(page);
        let check = await thankyouCheck(page);
        return check
    }
    catch (e) {
      console.log(e)
    }
  }