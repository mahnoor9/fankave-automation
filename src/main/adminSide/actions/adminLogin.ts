import  {Page}  from "@playwright/test";
import {
loginGoogleButton
} from "../locators/adminLogin.locators"

export async function signInGoogle (page: Page) {
    await page.locator(loginGoogleButton).click()
}