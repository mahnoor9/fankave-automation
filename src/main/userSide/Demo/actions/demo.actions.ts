import type { Page } from "@playwright/test";
import { approveButton } from "../../content.creation/locators/autodeskPhoto.locators";


export async function approve(page: Page) {
    const [response] = await Promise.all([
        page.waitForResponse(`https://dev.api.fankave.com/cmsx/stories/testimonialmvp/publish`),
        page.click(approveButton),
    ]);
    console.log(await response.json());
    return (await response.json());
}