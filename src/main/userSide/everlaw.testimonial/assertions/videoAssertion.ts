import {expect, Page} from '@playwright/test';
import { selectVideo, startRecording, stopRecording } from "../actions/recordVideo.actions"

export async function selectvideoButtoncheck(page: Page) {

    const Btn = await page.$(`text=RECORD VIDEO`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function recordButtoncheck(page: Page) {
    
    const Btn = await page.$(`div.css-bbq5bh > button`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function stoprecordButtoncheck(page: Page) {

    const Btn = await page.$(`div > button`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function retakeButtoncheck(page: Page) {

    const Btn = await page.$(`figure > button`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function approveButtoncheck(page: Page) {

    const Btn = await page.$(`article.button-wrapper > button`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();

}

export async function thankyouMessegecheck(page: Page) {

    const thankyouMessege = await page.$(`#fk-thankyou-screen > h2`);
    const textcheck = await thankyouMessege.innerText();
    const actualtext = textcheck.toLowerCase();
    expect(actualtext).toContain('thank you')
    }

