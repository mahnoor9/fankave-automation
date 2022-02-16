import { Page } from "@playwright/test";
import {
  loginGoogleButton, emailField, passwordField, userAvatar, passwordNext, emailNext
} from "../locators/adminLogin.locators"

export async function ClickSignInWithGoogle(page: Page) {
  await page.waitForSelector(loginGoogleButton);
  await page.locator(loginGoogleButton).click();
}
export async function enterEmail(page: Page) {

  await page.waitForSelector(emailField);
  await page.locator(emailField).type('aisha@fankave.com');

}

export async function enterPassword(page: Page) {
  await page.waitForSelector(passwordField);
  await page.type(passwordField, '@Fankave2022.');
}
export async function pressEnter(page: Page) {
  await page.keyboard.press('Enter');
}
export async function clickPasswordNext(page: Page) {
  await page.waitForSelector(passwordNext);
  await page.locator(passwordNext).click();

}
export async function clickEmailNext(page: Page) {
  await page.waitForSelector(emailNext);
  await page.locator(emailNext).click();

}
export async function isLoggedIn(page: Page) {

  await page.waitForSelector(userAvatar, { timeout: 30000 });
}

