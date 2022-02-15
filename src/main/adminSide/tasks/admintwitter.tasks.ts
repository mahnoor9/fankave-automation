import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../utils/waitTillHTMLRendered";
import { authorizeTweet, enterEmailfeild, enterPasswordfeild } from "../../userSide/content.creation/actions/autodeskTweet.actions";
import { confrimTweetposted, postButtonClick, twittericonClick, writetweet } from "../actions/adminTwitter.actions"

export async function tweetAdmin(page: Page) {
    try {
        await twittericonClick(page);
        await writetweet(page);
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), postButtonClick(page)]);
        await enterEmailfeild(page1)
        await enterPasswordfeild(page1)
        await authorizeTweet(page1);
        await page.waitForTimeout(10000);
        let checktweet = await confrimTweetposted(page);

        console.log(checktweet);
        return checktweet;
    }

    catch (e) {
        console.log(e)
    }

}
