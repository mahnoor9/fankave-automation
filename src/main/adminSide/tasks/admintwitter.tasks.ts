import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { authorizeTweet, enterEmailfeild, enterPasswordfeild } from "../../userSide/content.creation/actions/autodeskTweet.actions";
import { confrimposted, postButtonClick, twittericonClick, writeTesttext } from "../actions/adminTwitter.actions"

export async function tweetAdmin(page: Page, tweetwords, twitterAccount, twitterPassword) {
    try {
        await twittericonClick(page);
        await writeTesttext(page, tweetwords);
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), postButtonClick(page)]);
        await enterEmailfeild(page1, twitterAccount)
        await enterPasswordfeild(page1, twitterPassword)
        let check = await authorizeTweet(page1);
        page1.waitForEvent('close')
        const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/sharesocial/tweet`),
        ])
        await page.waitForTimeout(5000);
        let checktweet = await confrimposted(page);
        console.log(checktweet);
        return (response.json());
    }

    catch (e) {
        console.log(e)
    }

}
