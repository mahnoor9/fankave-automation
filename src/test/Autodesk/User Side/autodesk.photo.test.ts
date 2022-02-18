import { test, expect, Page, chromium, firefox } from '@playwright/test';
import { autodeskPhototask } from '../../../main/userSide/content.creation/tasks/autodeskPhoto.tasks'

test('Should capture a photo', async ({ page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/');
  let autoPhoto = await autodeskPhototask(page, "tester", "test@emumba.com");
  console.log(autoPhoto)
});
