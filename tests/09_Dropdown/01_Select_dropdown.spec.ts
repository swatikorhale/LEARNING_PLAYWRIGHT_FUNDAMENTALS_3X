import {test,expect} from '@playwright/test'

test("Verify Select dropdown", async({page})=>
{
    await  page.goto("https://the-internet.herokuapp.com/dropdown");

     const dropdown =page.locator("#dropdown");
     await dropdown.selectOption("Option 2");

    //Or
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown","Option 1");

    await page.pause();
})