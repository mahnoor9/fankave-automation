import { Page } from "@playwright/test";
import {
    loginGoogleButton, emailField, passwordField, userAvatar, passwordNext, emailNext
} from "../locators/adminLogin.locators"

export async function ClickSignInWithGoogle(page: Page) {
    await page.locator(loginGoogleButton).click()
}
export async function enterEmail(page: Page) {

    await page.locator(emailField).type('')
    
}

export async function enterPassword(page: Page) {
    await page.waitForSelector(passwordField)
    await page.type(passwordField,'')
}
export async function pressEnter(page: Page) {
    //await page.waitForFunction(page=> page.keyboard.press('Enter'))
    await page.keyboard.press('Enter')
}
export async function clickPasswordNext(page: Page) {
  await page.locator(passwordNext).click()
 
}
export async function clickEmailNext(page: Page) {
    await page.locator(emailNext).click()
   
  }
export async function isLoggedIn(page: Page) {
    
    await page.waitForSelector(userAvatar,{timeout:30000})
    // await page.waitForTimeout(5000)
  //  return await page.locator(userAvatar).isVisible();
}

