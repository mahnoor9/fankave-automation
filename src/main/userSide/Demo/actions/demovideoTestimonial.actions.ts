import type { Page } from "@playwright/test";
import { thankyouMessage, enterEmail, videoquestionTally, startrecordTestimonial, approveBtn, sendTestimonial, selectvideoTestimonial, stoprecordvideoTestimonial, videoQuestion } from "../locators/demoTestimonials.locators"

export async function selectvideoclick(page: Page) {
    await page.waitForSelector(selectvideoTestimonial);
    await page.click(selectvideoTestimonial);
}

export async function startRecording(page: Page) {
    await page.waitForSelector(startrecordTestimonial);
    await page.click(startrecordTestimonial);
}

export async function stopRecording(page: Page) {
    await page.click(stoprecordvideoTestimonial);
}

export async function approve(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`),
        page.click(approveBtn),
    ]);
    console.log(await response.json());
    return (await response.json());
}

export async function emailFeild(page: Page, testEmail) {
    await page.waitForSelector(enterEmail);
    await page.locator(enterEmail).click();
    await page.type("input.fk-input.fk-email-input", testEmail);
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

export async function getItrations(page: Page){
    await page.waitForSelector(videoquestionTally);
    let index = await (await page.$(videoquestionTally)).textContent();
    let getTally = index.split("");
    let tally = parseInt(getTally[2]);
    console.log(tally + " Questions");
    return tally;
}

export async function testimonialQuestion(page: Page){
    let questionIS = await (await page.$(videoQuestion)).textContent();
    console.log(questionIS);
}