import type { Page } from "@playwright/test";
import { enterEmail } from "../locators/demoAudio.locators";

export async function emailFeild(page: Page, giveEmail: string) {
    await page.waitForTimeout(1000);
    await page.type("input.fk-input.fk-email-input", giveEmail);
}

export async function generateEmail(page: Page) {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var ii = 0; ii < 15; ii++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    let randomEmail = string + '@test.com';
    return randomEmail;
}
