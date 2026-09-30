import {test,expect} from '@playwright/test'

test("Verify Custom dropdown", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    
    //② Multi — chips with remove
    //clicked on dropdown
    await page.locator("#rs-multi").click();

    //select multiple values
    await page.getByText("Mocha",{exact:true}).first().click();
    await page.getByText("Cucumber",{exact:true}).first().click();
    await page.getByText("TestNG",{exact:true}).first().click();


    //to close that dropdown window need to escape
    await page.keyboard.press("Escape");

    //③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();

    //select multiple values
    await page.getByText("performance",{exact:true}).first().click();
    await page.getByText("accessibility",{exact:true}).first().click();
    await page.keyboard.press("Escape");
    await page.pause();

})