import type { Page, expect } from "@playwright/test";
import { tweetButton, authorizeappButton, twitterenterEmail, enterPassword, confirmationMessage, thankyoumessage } from "../locators/autodeskTweet.locators";

export async function twitterShareclick(page: Page) {
    await page.waitForSelector(tweetButton);
    await page.locator(tweetButton).click();
}

export async function enterEmailfeild(page: Page, twitterAccount) {
    await page.waitForSelector(twitterenterEmail);
    await page.locator(twitterenterEmail).click();
    await page.locator(twitterenterEmail).type(twitterAccount);
}

export async function enterPasswordfeild(page: Page, twitterPassword) {
    await page.waitForSelector(enterPassword);
    await page.locator(enterPassword).click();
    await page.locator(enterPassword).type(twitterPassword)
}

export async function authorizeTweet(page: Page) {
    await page.waitForSelector(authorizeappButton);
    await page.locator(authorizeappButton).click();
}

export async function postedMessege(page: Page) {
    await page.waitForSelector(confirmationMessage);
    let checkmessege = await (await page.$(confirmationMessage)).textContent();
    console.log(checkmessege);
    return checkmessege;
}
