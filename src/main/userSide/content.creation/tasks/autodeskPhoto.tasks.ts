import { Page } from "@playwright/test";
import 
{ takePhoto, capturePhoto, continueForward, nameFeild, emailFeild, approvePhoto  } 
from "../actions/autodeskPhoto.actions";

export async function autodeskPhototask(page: Page) {
 try  { 
   await takePhoto(page)
   await page.waitForTimeout(5000)
   await capturePhoto(page);
   await page.waitForTimeout(5000)
   await continueForward(page);
   await page.waitForTimeout(2000)
   await nameFeild(page);
   await emailFeild(page);
   await page.waitForTimeout(2000)
   
   return await approvePhoto(page);}
  catch(e){
    console.log(e)
  }
  }