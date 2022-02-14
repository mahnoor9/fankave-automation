import { Page } from "@playwright/test";
import { emailFeild, nameFeild, storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { selectAudio } from "../../everlaw.testimonail/actions/recordAudio.actions";
import { approve } from "../actions/demo.actions";
import { startRecording, stopRecording, continueButton } from "../actions/demoAudio.actions";

export async function demorecordAudio(page: Page) {
 try  { 
   
   await selectAudio(page);
   await page.waitForTimeout(2000)
   await startRecording(page);
   await page.waitForTimeout(10000)
   await stopRecording(page);
   await continueButton(page);
   await page.waitForTimeout(1000)
    await nameFeild(page);
    await emailFeild(page);
    await storyFeild(page);
    await tagsFeild(page);
    await page.waitForTimeout(1000)
   
   return await approve(page);}
  catch(e){
    console.log(e)
  }};
