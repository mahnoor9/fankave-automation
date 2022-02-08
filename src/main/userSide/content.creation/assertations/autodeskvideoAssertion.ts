import {expect, Page,} from '@playwright/test';
import { recordVideo, startRecording, stopRecording, continueForward } from "../actions/autodeskVideo.actions"

export async function selectvideoButton(page: Page) {

    try {
    const videoBtn = await page.$('div.fk-widget-icon.fk-video-capture-icon');
    const confirm = await videoBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await videoBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function recordButton(page: Page) {

    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    const recordBtn = await page.$('div.fk-buttons-wrapper > button');
    const confirm = await recordBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await recordBtn.isVisible();
    expect (visibility).toBeTruthy();
    }    
    catch(e){
    console.log(e)
}};
    
export async function stoprecordButton(page: Page) {

    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    const stoprecordBtn = await page.$('div.fk-buttons-wrapper > button');
    const confirm = await stoprecordBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await stoprecordBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};

export async function continueButton(page: Page) {

    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    const continueBtn = await page.$('div.actions > button');
    const confirm = await continueBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await continueBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};
  
export async function rerecordButton(page: Page) {   
    
    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    const rerecordBtn = await page.$('div.fk-video-preview-container > button');
    const confirm = await rerecordBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await rerecordBtn.isVisible();
    expect (visibility).toBeTruthy();
    }    
    catch(e){
    console.log(e)
    }};

export async function confirmrerecordButton(page: Page) {    

    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    const rerecordBtn = await page.$('div.fk-video-preview-container > button');
    const confirm = await rerecordBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await rerecordBtn.isVisible();
    expect (visibility).toBeTruthy();
    }
    catch(e){
    console.log(e)
}};
    
export async function approveButton(page: Page) {

    try {
    await recordVideo(page)
    await page.waitForTimeout(2000)
    await startRecording(page);
    await page.waitForTimeout(10000)
    await stopRecording(page);
    await continueForward(page);
    await page.waitForTimeout(2000)
    const approveBtn = await page.$('div.actions > button');
    const confirm = await approveBtn.isEnabled();
    expect (confirm).toBeTruthy();
    const visibility = await approveBtn.isVisible();
    expect (visibility).toBeTruthy();
    }    
    catch(e){
    console.log(e)
    }};
