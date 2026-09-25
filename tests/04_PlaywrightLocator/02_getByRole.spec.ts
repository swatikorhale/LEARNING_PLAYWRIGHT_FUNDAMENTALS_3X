import {test,expect} from '@playwright/test'

test('#verfy kura website', async({page})=>
{
     await page.goto("https://katalon-demo-cura.herokuapp.com/");

     await page.getByRole("link",{name:"Make Appointment"}).click();

     await page.pause();

})