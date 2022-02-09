import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskPhototask } from '../tasks/autodeskPhoto.tasks'

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoPhoto = await autodeskPhototask(page);
  console.log(autoPhoto)
});
