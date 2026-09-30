import {test,expect} from '@playwright/test'

test("Verify Custom dropdown", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    
    //clicked on dropdown
    await page.getByTestId("lang-trigger").click();

    //Now selecting value
    await page.getByRole("option",{name:"Python"}).click();

    //or //when multiple elemnts coming take first()
    //await page.getByText("Python").first().click();

    //other dropdown
    await page.getByTestId("experience-trigger").click();
    await page.getByText("Mid-level (4-6 years)",{exact:true}).click();

    await page.pause();

})