import { Page } from "@playwright/test";
import { card, confirmtweetpopup, previewBtn, shareBtn, tweeticon, tweettext, } from "../locators/adminTwitter.locators";


export async function twittericonClick(page: Page) {
    (await page.$(tweeticon)).click();
};

export async function writetweet(page: Page) {
    await page.type( tweettext, "Test Tweet");
};

export async function previewButtonClick(page: Page) {
    (await page.$(previewBtn)).click()
};

export async function postButtonClick(page: Page) {
    (await page.$(shareBtn)).click()
};

export async function confrimTweetposted(page: Page) {
    let checkmessege = await (await page.$(confirmtweetpopup)).textContent();
    console.log(checkmessege)
    return checkmessege;
};

