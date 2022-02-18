import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoaudioTestimonialtask } from '../../../main/userSide/Demo/tasks/demoaudioTestimonial.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto(userSide.URL);
  let response = await demoaudioTestimonialtask(page,userSide.TestEmail);
  expect(response).toContain(userSide.thankyouMail);
});