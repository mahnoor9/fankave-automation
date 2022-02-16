import { Page } from "@playwright/test";
import { getItrations, approve, selectaudioclick, sendRecording, startRecording, stopRecording, testimonialQuestion } from "../actions/demoaudioTestimonial.actions"
import { emailFeild } from "../actions/demoTestimonial.Email.actions";

export async function demoaudioTestimonialGetEmailIDtask(page: Page, emailentry) {
    try {

        await selectaudioclick(page);
        
        let i = await getItrations(page);
        await page.keyboard.press("Tab");
        let loop = 0;
        let IDsArray = [];
        do {
        await page.keyboard.press("Tab");
        await startRecording(page);
        await testimonialQuestion(page);
        await page.waitForTimeout(6000);
        await page.keyboard.press("Tab");
        await stopRecording(page);
        let saveID: any = await approve(page);
        IDsArray.push(saveID.data.id);
        loop++;
        } while (loop < i)
        console.log(IDsArray);
        await emailFeild(page, emailentry);
        await sendRecording(page);
        return IDsArray;
    }
    catch (e) {
      console.log(e)
    }
  }