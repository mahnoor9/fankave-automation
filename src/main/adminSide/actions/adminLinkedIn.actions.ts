import { Page } from "@playwright/test";
import { linkedinenterEmail } from "../../userSide/content.creation/locators/autodeskTweet.locators";
import {linkedinIcon } from "../locators/adminTwitter.locators";


export async function linkedIniconClick(page: Page) {
    await page.waitForSelector(linkedinIcon);
    (await page.$(linkedinIcon)).click();
};

export async function enterEmailfeildlinkedin(page: Page, linkedinAccount) {
    await page.waitForSelector(linkedinenterEmail);
    await page.locator(linkedinenterEmail).click();
    await page.locator(linkedinenterEmail).type(linkedinAccount);
}
