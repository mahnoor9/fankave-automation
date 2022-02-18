import { test, expect, Page, chromium, firefox, request } from '@playwright/test';
import { generateEmail } from '../../../main/userSide/Demo/actions/demoTestimonial.Email.actions';
import { demoaudioTestimonialGetEmailIDtask } from '../../../main/userSide/Demo/tasks/demoaudioTestimonial.Email.tasks';


test('should add a new audio from the user side and the IDs should be linked to the User Email', async ({ request, page }) => {
  await page.goto('https://dev.ccapps.fankave.com/contentcreation/?experience=demo');
  let ourEmail = await generateEmail(page);
  console.log(ourEmail);
  let response = await demoaudioTestimonialGetEmailIDtask(page, ourEmail);
  await page.waitForTimeout(2000);
  await request.get('https://dev.api.fankave.com/v1.0/cms/content/social?ctag=testimonialmvp&filter=&contentType=&limit=25');
  await page.waitForTimeout(2000);
  await request.get('https://dev.api.fankave.com/v1.0/cms/content/social?ctag=testimonialmvp&filter=&contentType=&limit=25');
  let getSocialAPI= await (await request.get('https://dev.api.fankave.com/v1.0/cms/content/social?ctag=testimonialmvp&filter=&contentType=&limit=25'));
  let checkSocialAPI: JSON = await getSocialAPI.json();
  response = response.reverse();
  let loopNumber = response.length;
  let i = 0;
  do
  {
    expect(checkSocialAPI[i].content.sections[0].embed.author.email).toContain(ourEmail);
    console.log(checkSocialAPI[i].content.sections[0].embed.author.email);
    expect(checkSocialAPI[i].id).toContain(response[i]);
    console.log(checkSocialAPI[i].id)
    i++;
  } while (i < loopNumber)

});