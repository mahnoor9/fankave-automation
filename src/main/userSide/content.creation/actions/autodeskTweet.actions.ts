import type { Page, expect } from "@playwright/test";
import { tweetButton, authorizeappButton, enterEmail, enterPassword, confirmationMessege } from "../locators/autodeskTweet.locators";

export async function twitterShareclick(page: Page){
    await page.locator(tweetButton).click();
}

export async function enterEmailfeild(page: Page){
   await page.locator(enterEmail).click();
   await page.locator(enterEmail).type("Test_fank");
}

export async function enterPasswordfeild(page: Page){
    await page.locator(enterPassword).click();
    await page.locator(enterPassword).type("Test1234")
}

export async function authorizeTweet(page: Page){
    await page.locator(authorizeappButton).click();
 }

export async function postedMessege(page: Page){
   let checkmessege = await (await page.$(confirmationMessege)).innerText();
   console.log(checkmessege);
//    expect(checkmessege)
}