import type { Page } from "@playwright/test";
import { selectaudioTestimonial, stoprecordaudioTestimonial, thankyouMessage, audioQuestion, enterEmail, audioquestionTally, startrecordTestimonial, approveBtn, sendTestimonial } from "../locators/demoTestimonials.locators"

export async function selectaudioclick(page: Page) {
    await page.waitForSelector(selectaudioTestimonial);
    await page.click(selectaudioTestimonial);
}

export async function startRecording(page: Page) {
    await page.waitForSelector(startrecordTestimonial);
    await page.click(startrecordTestimonial);
}

export async function stopRecording(page: Page) {
    await page.click(stoprecordaudioTestimonial);
}

export async function approve(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`),
        page.click(approveBtn),
    ]);
    console.log(await response.json());
    return (await response.json());
}

export async function emailFeild(page: Page) {
    await page.waitForSelector(enterEmail);
    await page.locator(enterEmail).click();
    await page.type("input.fk-input.fk-email-input", "test@emumba.com");
}

export async function sendRecording(page: Page) {
    await page.waitForSelector(sendTestimonial);
    await page.click(sendTestimonial);
}

export async function thankyouCheck(page: Page) {
    await page.waitForSelector(thankyouMessage);
    let thankyouText = await (await page.$(thankyouMessage)).textContent();
    return thankyouText;
}
export async function reverseString(str) {
    let reversedStr: string =  str.split("").reverse().join("");
    return reversedStr;
}

export async function getItrations(page: Page){
    await page.waitForSelector(audioquestionTally);
    let index = await (await page.$(audioquestionTally)).textContent();
    let getTally = index.split("");
    let tally = parseInt(getTally[2]);
    console.log(tally + " Questions");
    return tally;
}

export async function testimonialQuestion(page: Page){
    let questionIS = await (await page.$(audioQuestion)).textContent();
    console.log(questionIS);
}