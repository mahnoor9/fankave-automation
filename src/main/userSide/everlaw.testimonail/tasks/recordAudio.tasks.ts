import { Page } from "@playwright/test";
import { approveRecording, selectAudio, startRecording, stopRecording } from "../actions/recordAudio.actions";

export async function recordAudio(page: Page) {
 try  { 
   
   await selectAudio(page);
   await page.waitForTimeout(2000)
   await startRecording(page);
   await page.waitForTimeout(10000)
   await stopRecording(page);
   
   return await approveRecording(page);}
  catch(e){
    console.log(e)
  }};
