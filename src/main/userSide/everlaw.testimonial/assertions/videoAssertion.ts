import {expect, Page} from '@playwright/test';
import { selectVideo, startRecording, stopRecording } from "../actions/recordVideo.actions"

export async function selectvideoButton(page: Page) {

    try {
    const uploadBtn = await page.$(`text=RECORD VIDEO`);
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
    await selectVideo(page);
    await page.waitForTimeout(1000)    
    const uploadBtn = await page.$(`button.record-button`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function stoprecordButton(page: Page) {

    try {
    await selectVideo(page);
    await page.waitForTimeout(1000)
    await startRecording(page);
    await page.waitForTimeout(1000)
    const uploadBtn = await page.$(`button.stop-recording-button`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function retakeButton(page: Page) {

    try {
    await selectVideo(page);
    await page.waitForTimeout(1000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    await page.waitForTimeout(1000)
    const uploadBtn = await page.$(`figure > button`);
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
    await selectVideo(page);
    await page.waitForTimeout(1000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    await page.waitForTimeout(1000)
    const uploadBtn = await page.$(`button.approve-button.false`);
    const confirm = await uploadBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await uploadBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};