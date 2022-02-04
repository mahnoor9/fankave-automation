import type { Page } from "@playwright/test";
import { selectUpload, uploadSelect, continueButton, enterName, enterEmail, approveButton, uploadDoc, filepath } from "../locators/autodeskUpload.locators";

export async function uploadPhoto (page: Page) {
    await page.locator(selectUpload).click()
}
export async function uploadImage (page: Page) {
    await page.keyboard.press('Tab')
    await page.locator(uploadSelect).click()
}
export async function uploadFile (page: Page) {
    //await page.locator(uploadDoc).click()
    await page.setInputFiles(uploadDoc, filepath)
}
export async function continueForward(page: Page) {
    await page.locator(continueButton).click();
}
export async function nameFeild (page: Page) {
    await page.locator(enterName).click();
    await page.type("#fk-name", "Saad");
}
export async function emailFeild (page: Page) {
    await page.locator(enterEmail).click();
    await page.type("#fk-email", "test@emumba.com");
}
export async function approveImage(page: Page) {
    const [response]= await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/autodesk/publish`
           
        ),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    return JSON.stringify(await response.json());
}