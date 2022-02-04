import  {Page}  from "@playwright/test";
import {
loginGoogleButton,emailField,passwordField
} from "../locators/adminLogin.locators"

export async function ClickSignInWithGoogle (page: Page) {
    await page.locator(loginGoogleButton).click()
}
export async function enterEmail (page: Page) {
    await page.locator(emailField).type('aisha@fankave.com')
}
export async function enterPassword (page: Page) {
    await page.locator(passwordField).type('@@Fankave2022.')
}
export async function pressEnter (page: Page) {
    await page.keyboard.press('Enter')
}
