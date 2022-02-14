import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoPhototask } from '../tasks/demoPhoto.tasks'

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoPhoto = await demoPhototask(page);
  console.log(autoPhoto)
});
