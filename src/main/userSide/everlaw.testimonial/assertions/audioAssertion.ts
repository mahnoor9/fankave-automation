import {expect, Page} from '@playwright/test';
import { selectAudio, startRecording, stopRecording } from "../actions/recordAudio.actions"

export async function selectaudioButton(page: Page) {

    try {
    const uploadBtn = await page.$(`text=RECORD AUDIO`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function recordButton(page: Page) {

    try {
    await selectAudio(page);
    await page.waitForTimeout(2000)
    const uploadBtn = await page.$(`Ellipse_2`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function stoprecordingButton(page: Page) {

    try {
    await selectAudio(page);
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    const uploadBtn = await page.$(`button.stop-recording-button`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function approveButton(page: Page) {

    try {
    await selectAudio(page);
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);    
    const uploadBtn = await page.$(`button.approve-button.audio-approve-button`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};