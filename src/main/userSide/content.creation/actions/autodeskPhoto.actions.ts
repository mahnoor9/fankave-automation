import type { Page } from "@playwright/test";
import {
    selectPhoto,
    captureButton,
    continueButton,
    enterName,
    enterEmail,
    approveButton,
    enterStory,
    enterTags,
} from "../locators/autodeskPhoto.locators";

export async function takePhoto(page: Page) {
    await page.waitForSelector(selectPhoto)
    await page.locator(selectPhoto).click()
}
export async function capturePhoto(page: Page) {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.waitForSelector(captureButton)
    await page.locator(captureButton).click()
}
export async function continueForward(page: Page) {
    await page.waitForSelector(continueButton)
    await page.locator(continueButton).click();
}
export async function nameFeild(page: Page) {
    await page.waitForSelector(enterName)
    await page.locator(enterName).click();
    await page.type("#fk-name", "Saad");
}
export async function emailFeild(page: Page) {
    await page.waitForSelector(enterEmail)
    await page.locator(enterEmail).click();
    await page.type("#fk-email", "test@emumba.com");
}
export async function storyFeild(page: Page) {
    await page.waitForSelector(enterStory)
    await page.locator(enterStory).click();
    await page.type("div.fk-story-form", "This is a Test");
}
export async function tagsFeild(page: Page) {
    await page.waitForSelector(enterTags)
    await page.locator(enterTags).click();
    await page.type("#fk-hashtags", "TEST");
    await page.keyboard.press('Space')
}
export async function approvePhoto(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/autodesk/publish`),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    return (await response.json());
}