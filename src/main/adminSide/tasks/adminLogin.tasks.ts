import { Page } from "@playwright/test";
import { signInGoogle } from "../actions/adminLogin"

export async function googleSignIn (page: Page) {
    await signInGoogle (page);
}