import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../../utils/waitTillHTMLRendered";
import { twitterShareclick, enterEmailfeild, enterPasswordfeild, authorizeTweet, postedMessege } from "../actions/autodeskTweet.actions";
import { tweetButton } from "../locators/autodeskTweet.locators";

export async function tweetAuto(page: Page, twitterAccount, twitterPassword) {
    try {
        let context = await page.context();
        const [page1] = await Promise.all([context.waitForEvent('page'), twitterShareclick(page)]);
        await enterEmailfeild(page1, twitterAccount)
        await enterPasswordfeild(page1,twitterPassword)
        await authorizeTweet(page1);
        let postedtext = await postedMessege(page);

        return postedtext;
    }
    catch (e) {
        console.log(e)
    }
}