import {test,expect} from '@playwright/test'

test('#verfy wingify website', async({page})=>
{
     await page.goto("https://app.vwo.com/#/login");

     let userEmail=page.getByRole("textbox", { name:"Email"});
     await userEmail.fill("admin123@gmail.com");

     let userPwd=page.getByRole("textbox",{name:"Password"});
     await userPwd.fill("admin123");

     await page.pause();

})