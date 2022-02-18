import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../../utils/waitTillHTMLRendered";
import { postedMessege } from "../../content.creation/actions/autodeskTweet.actions";
import { linkedinShareclick, enterEmailfeild, enterPasswordfeild, signInlinkedin } from "../actions/demoLinkedIn.user.actions";

export async function linkedinShareAuto(page: Page, linkedinAccount, linkedinPassword) {
    try {
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), linkedinShareclick(page)]);
        await enterEmailfeild(page1, linkedinAccount)
        await enterPasswordfeild(page1, linkedinPassword)
        await signInlinkedin(page1);
        let postedtext = await postedMessege(page);

        return postedtext;

    }
    catch (e) {
        console.log(e)
    }
}