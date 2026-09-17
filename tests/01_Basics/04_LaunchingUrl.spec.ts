import {test,expect} from '@playwright/test';

test("Navigating to Google Website", async ({page}) => {

    await page.goto("https://www.google.com/");
    console.log("Hi swati");
    
})

