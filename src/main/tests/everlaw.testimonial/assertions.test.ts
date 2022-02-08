import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { selectaudioButton } from "../../userSide/everlaw.testimonial/assertions/audioAssertion";

test('Select Audio Button' , async ({ page }) => {
    await page.goto('https://dev.ccapps.fankave.com/everlaw/testimonials/');
    let homepageAssertion = await selectaudioButton(page);
    console.log(homepageAssertion);
    });