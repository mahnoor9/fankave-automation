import type { Page, expect } from "@playwright/test";
import { linkedinShareBtn, enterEmail, enterPassword, signinBtn, confirmationMessage } from "../locators/demoLinkedin.user.locators"

export async function linkedinShareclick(page: Page) {
    await page.waitForSelector(linkedinShareBtn);
    await page.locator(linkedinShareBtn).click();
}

export async function enterEmailfeild(page: Page, linkedinAccount) {
    await page.waitForSelector(enterEmail);
    await page.locator(enterEmail).click();
    await page.locator(enterEmail).type(linkedinAccount);
}

export async function enterPasswordfeild(page: Page, linkedinPassword) {
    await page.waitForSelector(enterPassword);
    await page.locator(enterPassword).click();
    await page.locator(enterPassword).type(linkedinPassword)
}

export async function signInlinkedin(page: Page) {
    await page.waitForSelector(signinBtn);
    await page.locator(signinBtn).click();
}

export async function postedMessege(page: Page) {
    await page.waitForSelector(confirmationMessage);
    let checkmessege = await (await page.$(confirmationMessage)).textContent();
    console.log(checkmessege);
    return checkmessege;
}