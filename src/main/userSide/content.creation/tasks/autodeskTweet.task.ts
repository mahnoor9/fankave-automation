import { Page } from "@playwright/test";
import waitTillHTMLRendered from "../../../utils/waitTillHTMLRendered";
import { twitterShareclick, enterEmailfeild, enterPasswordfeild, authorizeTweet, postedMessege } from "../actions/autodeskTweet.actions";
import { tweetButton } from "../locators/autodeskTweet.locators";

export async function tweetAutodesk(page: Page) {
    try {
        let context = await page.context();
        const [page1] = await Promise.all([ context.waitForEvent('page'), twitterShareclick(page)]);
        await enterEmailfeild(page1)
        await enterPasswordfeild(page1)
        const [page2] = await Promise.all([ context.waitForEvent('page'), authorizeTweet(page1)]);
        await page2.waitForTimeout(3000);
        await postedMessege(page2)
    }

    catch (e) {
        console.log(e)
    }
}