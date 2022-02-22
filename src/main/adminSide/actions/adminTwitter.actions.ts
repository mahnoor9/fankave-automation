import { Page } from "@playwright/test";
import { card, confirmpopup, previewBtn, shareBtn, tweeticon, tweettext, } from "../locators/adminTwitter.locators";


export async function twittericonClick(page: Page) {
    await page.waitForSelector(tweeticon);
    (await page.$(tweeticon)).click();
};

export async function writeTesttext(page: Page, TestText) {
    await page.waitForSelector(tweettext);
    await page.type(tweettext, TestText);
};

export async function previewButtonClick(page: Page) {
    await page.waitForSelector(previewBtn);
    (await page.$(previewBtn)).click()
};

export async function postButtonClick(page: Page) {
    await page.waitForSelector(shareBtn);
    (await page.$(shareBtn)).click()
};

export async function confrimposted(page: Page) {
    await page.waitForSelector(confirmpopup)
    let checkmessege = await (await page.$(confirmpopup)).textContent();
    console.log(checkmessege)
    return checkmessege;
};

