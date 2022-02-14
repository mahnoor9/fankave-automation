import { Page } from "@playwright/test";
import { cards, searchField, searchOption } from "../locators/adminSearch.locators";

export async function clearSearchField(page: Page) {
    await page.waitForSelector(`div.appcontainer`)
    await page.click(searchField)
    let value = await page.$eval(searchField, el => el.getAttribute('value'))
    console.log(value)
    for (let i = 0; i < value.length; i++) {
        await page.click(searchField)
        await page.keyboard.press('Backspace');
    }
}
export async function enterSearchText(page: Page, text: string) {
    await page.click(searchField)
    await page.type(searchField, text)
    await page.click(searchOption)
    await page.waitForSelector(cards)
    
}

export async function getDataIDs(page: Page) {
    
    let dataIDs
    for(let i=0;i<3;i++){
    await page.waitForSelector(cards)
    dataIDs = await page.$$eval(cards, inputs => { return inputs.map(input => input.getAttribute('data-key')) })
    await page.reload({timeout: 40000 , waitUntil: 'domcontentloaded'})
    console.log("SFDSFSD",dataIDs)
                           }
    return dataIDs
}

