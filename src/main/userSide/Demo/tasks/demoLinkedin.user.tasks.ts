import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../../utils/waitTillHTMLRendered";
import { linkedinShareclick, enterEmailfeild, enterPasswordfeild, signInlinkedin } from "../actions/demoLinkedIn.user.actions";

export async function linkedinShareAuto(page: Page) {
    try {
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), linkedinShareclick(page)]);
        await enterEmailfeild(page1)
        await enterPasswordfeild(page1)
        await signInlinkedin(page1);

    }
    catch (e) {
        console.log(e)
    }
}