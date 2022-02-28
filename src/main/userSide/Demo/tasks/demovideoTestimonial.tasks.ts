import { Page } from "@playwright/test";
import { getItrations, thankyouCheck, approve, selectvideoclick, sendRecording, startRecording, stopRecording, emailFeild, testimonialQuestion } from "../actions/demovideoTestimonial.actions"

export async function demovideoTestimonialtask(page: Page,emailEntry) {
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
        await page.waitForTimeout(13000);
        await stopRecording(page);
        await approve(page);
        loop++;
        } while (loop < i)
        await emailFeild(page, emailEntry);
        await sendRecording(page);
        let check = await thankyouCheck(page);
        return check
    }
    catch (e) {
      console.log(e)
    }
  }

  export async function demovideoTestimonialtaskE2E(page: Page,emailEntry) {
    try {

        await selectvideoclick(page);
        
        let i = await getItrations(page);
        let loop = 0;
        let setID: any;
        let check = []; 
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
        await page.waitForTimeout(13000);
        await stopRecording(page);
        setID = await approve(page);
        check.push(setID.data.id);
        loop++;
        } while (loop < i)
        await emailFeild(page, emailEntry);
        await sendRecording(page);
        await thankyouCheck(page);
        return check
    }
    catch (e) {
      console.log(e)
    }
  }