import { Page } from "@playwright/test";
import { emailFeild } from "../actions/demoTestimonial.Email.actions";
import { getItrations, approve, selectvideoclick, sendRecording, startRecording, stopRecording, testimonialQuestion } from "../actions/demovideoTestimonial.actions"

export async function demovideoTestimonialGetEmailIDtask(page: Page, emailentry) {
    try {

        await selectvideoclick(page);
        
        let i = await getItrations(page);
        let loop = 0;
        let IDsArray = [];
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