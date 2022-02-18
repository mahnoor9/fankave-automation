import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demovideoTestimonialtask } from '../../../main/userSide/Demo/tasks/demovideoTestimonial.tasks';
import { userSide } from '../../JSONtestdata/demo.json'

test('should add a new audio from the user side', async ({ page }) => {
  await page.goto(userSide.URL);
  let respone = await demovideoTestimonialtask(page,userSide.TestEmail);
  expect(respone).toContain(userSide.thankyouMail);
});