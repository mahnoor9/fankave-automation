import {expect, Page} from '@playwright/test';
import { uploadPhoto, uploadImage, uploadFile, continueForward } from "../actions/autodeskUpload.actions"

export async function selectuploadButton(page: Page) {

    try {
    const uploadBtn = await page.$('div.fk-widget-icon.fk-image-upload-icon');
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function uploadimageButton(page: Page) {

    try {
    await uploadPhoto(page);
    await page.waitForTimeout(2000);
    const uploadimgBtn = await page.$('div > button');
    const confirm = await uploadimgBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadimgBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function continueButton(page: Page) {

    try {
    await uploadPhoto(page);
    await page.waitForTimeout(2000);
    await uploadImage(page);
    await page.waitForTimeout(2000);
    const contnBtn = await page.$('div.actions > button');
    const confirm = await contnBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await contnBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function retakeButton(page: Page) {

    try {
    await uploadPhoto(page);
    await page.waitForTimeout(2000);
    await uploadImage(page);
    await page.waitForTimeout(2000);
    const retakeBtn = await page.$('div.image-container > button');
    const confirm = await retakeBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await retakeBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function approveButton(page: Page) {

    try {
    await uploadPhoto(page);
    await page.waitForTimeout(2000);
    await uploadImage(page);
    await page.waitForTimeout(2000);
    await uploadFile(page);
    await page.waitForTimeout(2000);
    await continueForward(page);
    await page.waitForTimeout(2000);
    const retakeBtn = await page.$('div.actions > button');
    const confirm = await retakeBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await retakeBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};