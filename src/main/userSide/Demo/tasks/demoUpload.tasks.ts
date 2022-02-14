import { Page } from "@playwright/test";
import { storyFeild, tagsFeild } from "../../content.creation/actions/autodeskPhoto.actions";
import { uploadImage, uploadPhoto, continueForward, nameFeild, emailFeild, uploadFile } from "../../content.creation/actions/autodeskUpload.actions";
import { approve } from "../actions/demo.actions"

export async function demoUploadtask(page: Page) {
  try {
    await uploadPhoto(page);
    await uploadImage(page);
    await uploadFile(page);
    await continueForward(page);
    await nameFeild(page);
    await emailFeild(page);
    await storyFeild(page);
    await tagsFeild(page);

    return await approve(page);
  }
  catch (e) {
    console.log(e)
  }
}