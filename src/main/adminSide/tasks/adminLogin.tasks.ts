import { Page } from "@playwright/test";
import { ClickSignInWithGoogle, enterEmail, enterPassword, pressEnter } from "../actions/adminLogin"

export async function googleSignIn (page: Page) {
    let context= await page.context();
    const [page1] = await Promise.all([
        context.waitForEvent('page'),
        ClickSignInWithGoogle (page)
      ]);
    await enterEmail(page1);
    await pressEnter(page1)
    await page.waitForTimeout(5000)
    await enterPassword(page1)
    await pressEnter(page1)
    await page1.waitForTimeout(100000)
    
}