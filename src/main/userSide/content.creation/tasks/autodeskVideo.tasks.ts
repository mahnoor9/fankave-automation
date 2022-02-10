import { Page } from "@playwright/test";
import 
{ recordVideo, startRecording, stopRecording, continueForward, nameFeild, emailFeild, approveRecording  } 
from "../actions/autodeskVideo.actions";

export async function autodeskVideotask(page: Page) {
 try  { 
   await recordVideo(page)
   await page.waitForTimeout(3000)
   await startRecording(page);
   await page.waitForTimeout(5000)
   await stopRecording(page);
   await continueForward(page);
   await page.waitForTimeout(1000)
   await nameFeild(page);
   await emailFeild(page);
   await page.waitForTimeout(500)
   
  return await approveRecording(page);}
  catch(e){
    console.log(e)
  }
  }