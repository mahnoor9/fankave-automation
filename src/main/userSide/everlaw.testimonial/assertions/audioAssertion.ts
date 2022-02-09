import {expect, Page} from '@playwright/test';

export async function selectaudioButtoncheck(page: Page) {

    const Btn = await page.$(`text=RECORD AUDIO`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function recordButtoncheck(page: Page) {

    const Btn = await page.$(`#Ellipse_2`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }

export async function stoprecordingButtoncheck(page: Page) {

    const Btn = await page.$(`button.stop-recording-button`);
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

export async function approveButtoncheck(page: Page) {
  
    const Btn = await page.$(`button.approve-button.audio-approve-button`);
    const confirm = await Btn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await Btn.isVisible();
    expect (visibility).toBeTruthy();
    }