import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoaudioTestimonialtask } from '../tasks/demoaudioTestimonial.tasks';

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let response = await demoaudioTestimonialtask(page);
  expect(response).toContain("Thaks for providing your email");
});