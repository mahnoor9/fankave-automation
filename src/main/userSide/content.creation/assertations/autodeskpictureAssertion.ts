import {expect, Page} from '@playwright/test';
import { takePhoto, capturePhoto, continueForward, approvePhoto } from "../actions/autodeskPhoto.actions";

export async function selectphotobuttoncheck(page: Page) {

    const pictureBtn = await page.$('div.fk-widget-icon.fk-image-capture-icon');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function takephotobuttoncheck(page: Page) {

    const pictureBtn = await page.$('div.fk-buttons-wrapper > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function continuebuttoncheck(page: Page) {

    const pictureBtn = await page.$('div.actions > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function retakebuttoncheck(page: Page) {

    const pictureBtn = await page.$('div.image-container > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
}

export async function approvebuttoncheck(page: Page) {

    const pictureBtn = await page.$('div.actions > button');
    const confirm = await pictureBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await pictureBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    
export async function thankyouMessegecheck(page: Page) {

    const thankyouMessege = await page.$(`p.fk-message-text`);
    const textcheck = await thankyouMessege.innerText();
    const actualtext = textcheck.toLowerCase();
    expect(actualtext).toContain('thank you')
    }
