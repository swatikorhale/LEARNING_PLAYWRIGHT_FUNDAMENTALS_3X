import { test, expect } from '@playwright/test'
import loginData from './testData/loginData.json'

test.describe("verify login data driven", async () => {
    test.beforeEach(async ({ page }) => {
        const url = "https://app.thetestingacademy.com/playwright/multiple_element_filter?utm_source=chatgpt.com";
        await page.goto(url);
    });

    test("Verfify valid user", async ({ page }) => {
        await page.locator("#email").fill(loginData.validUser.email);
        await page.locator("#password").fill(loginData.validUser.password);
        await page.locator(".login-btn").click();
    });

    test("Verfify invalid user", async ({ page }) => {
        await page.locator("#email").fill(loginData.invalidUser.email);
        await page.locator("#password").fill(loginData.invalidUser.password);
        await page.locator(".login-btn").click();
    })
})
