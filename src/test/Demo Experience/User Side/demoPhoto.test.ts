import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { demoPhototask } from '../../../main/userSide/Demo/tasks/demoPhoto.tasks'

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let autoPhoto = await demoPhototask(page, "Tester", "test@emumba.com", "Testing", "Test");
  console.log(autoPhoto)
});
