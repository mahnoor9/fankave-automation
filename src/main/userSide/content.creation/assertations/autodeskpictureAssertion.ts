import {expect, Page} from '@playwright/test';
import { takePhoto, capturePhoto, continueForward, approvePhoto } from "../actions/autodeskPhoto.actions";

export async function selectphotobutton(page: Page) {
    
    try  { 
    const pictureBtn = await page.$('div.fk-widget-icon.fk-image-capture-icon');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
        console.log(e)
}};

export async function takephotobutton(page: Page) {

    try  { 
    await takePhoto(page)
    await page.waitForTimeout(5000)
    const pictureBtn = await page.$('div.fk-buttons-wrapper > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function continuebutton(page: Page) {

    try  { 
    await takePhoto(page)
    await page.waitForTimeout(5000)
    await capturePhoto(page);
    await page.waitForTimeout(5000)
    const pictureBtn = await page.$('div.actions > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function retakebutton(page: Page) {

    try  { 
    await takePhoto(page)
    await page.waitForTimeout(5000)
    await capturePhoto(page);
    await page.waitForTimeout(5000)
    const pictureBtn = await page.$('div.image-container > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function approvebutton(page: Page) {

    try  { 
    await takePhoto(page)
    await page.waitForTimeout(5000)
    await capturePhoto(page);
    await page.waitForTimeout(5000)
    await continueForward(page);
    await page.waitForTimeout(2000)
    const pictureBtn = await page.$('div.actions > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};