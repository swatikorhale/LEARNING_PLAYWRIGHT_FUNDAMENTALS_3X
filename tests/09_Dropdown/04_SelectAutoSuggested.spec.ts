import {test,expect} from '@playwright/test'

test("Verify ⑤ Async — fetched on type", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    
    //clicked on dropdown
    await page.getByTestId("rs-async").click();

    //enter pun-need to serach for input textbox to enter text
    await page.getByTestId("rs-async-input").fill("Pun");
    //verfy if that menu list contains pune
    await expect(page.getByTestId("rs-async-menu")).toContainText("Pune");
    //if yes click on pune
    await page.getByRole("option",{name:"Pune", exact:true}).click();


    await page.pause();

})