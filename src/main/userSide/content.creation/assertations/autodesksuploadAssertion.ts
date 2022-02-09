import {expect, Page} from '@playwright/test';
import { uploadPhoto, uploadImage, uploadFile, continueForward } from "../actions/autodeskUpload.actions"

export async function selectuploadButtoncheck(page: Page) {

    const uploadBtn = await page.$('div.fk-widget-icon.fk-image-upload-icon');
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function uploadimageButtoncheck(page: Page) {

    const uploadimgBtn = await page.$('div > button');
    const confirm = await uploadimgBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadimgBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function continueButtoncheck(page: Page) {

    const contnBtn = await page.$('div.actions > button');
    const confirm = await contnBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await contnBtn.isVisible();
    expect (visibility).toBeTruthy();
    }


export async function retakeButtoncheck(page: Page) {

    const retakeBtn = await page.$('div.image-container > button');
    const confirm = await retakeBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await retakeBtn.isVisible();
    expect (visibility).toBeTruthy();
    }


export async function approveButtoncheck(page: Page) {

    const retakeBtn = await page.$('div.actions > button');
    const confirm = await retakeBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await retakeBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function thankyouMessegecheck(page: Page) {

    const thankyouMessege = await page.$(`p.fk-message-text`);
    const textcheck = await thankyouMessege.innerText();
    const actualtext = textcheck.toLowerCase();
    expect(actualtext).toContain('thank you')
    }