import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demovideoTestimonialtask } from '../../../main/userSide/Demo/tasks/demovideoTestimonial.tasks';

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let respone = await demovideoTestimonialtask(page, "test@emumba.com");
  expect(respone).toContain("Thaks for providing your email");
});