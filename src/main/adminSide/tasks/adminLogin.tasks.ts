import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { clickEmailNext, clickPasswordNext, ClickSignInWithGoogle, enterEmail, enterPassword, isLoggedIn, pressEnter } from "../actions/adminLogin.actions"


export async function googleSignIn(page: Page, gmailAccount, gmailPassword) {
    try {
        let context = await page.context();
        const [page1] = await Promise.all([
            context.waitForEvent('page'),
            ClickSignInWithGoogle(page)
        ]);
        await page1.waitForNavigation({ waitUntil: 'domcontentloaded' })
        await enterEmail(page1, gmailAccount)
        await clickEmailNext(page1)
        await enterPassword(page1, gmailPassword)
        await clickPasswordNext(page1)
        await page.waitForTimeout(10000)
    }

    catch (e) {
        console.log(e)
    }

}
// 'aisha@fankave.com', '@Fankave2022.'