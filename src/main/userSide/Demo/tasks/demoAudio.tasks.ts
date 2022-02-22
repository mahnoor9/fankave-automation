import { Page } from "@playwright/test";
import { emailFeild, nameFeild, storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { selectAudio } from "../../everlaw.testimonail/actions/recordAudio.actions";
import { approve } from "../actions/demo.actions";
import { startRecording, stopRecording, continueButton } from "../actions/demoAudio.actions";

export async function demorecordAudio(page: Page, testName, testEmail, testStory, testTag) {
  try {

    await selectAudio(page);
    await startRecording(page);
    await page.waitForTimeout(13000)
    await stopRecording(page);
    await continueButton(page);
    await nameFeild(page, testName);
    await emailFeild(page, testEmail);
    await storyFeild(page, testStory);
    await tagsFeild(page, testTag);

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
};
