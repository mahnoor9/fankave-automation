import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { enterPasswordfeild } from "../../userSide/content.creation/actions/autodeskTweet.actions";
import { confrimposted, postButtonClick, writeTesttext } from "../actions/adminTwitter.actions"
import { enterEmailfeildlinkedin, linkedIniconClick } from "../actions/adminLinkedIn.actions";
import { signInlinkedin } from "../../userSide/Demo/actions/demoLinkedIn.user.actions";

export async function linkedinAdminShare(page: Page, postText, linkedinAccount, linkedinPassword) {
    try {
        await linkedIniconClick(page);
        await writeTesttext(page, postText);
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), postButtonClick(page)]);
        await enterEmailfeildlinkedin(page1, linkedinAccount)
        await enterPasswordfeild(page1, linkedinPassword)
        await signInlinkedin(page1);
        await page.waitForTimeout(10000);
        let checkmsg = await confrimposted(page);

        return checkmsg;
    }

    catch (e) {
        console.log(e)
    }

}
