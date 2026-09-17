import {test,expect} from '@playwright/test'

test('#tc1- verify the vwo page is loaded', async({page}) =>
{
      await page.goto("https://app.vwo.com",{
        waitUntil:'domcontentloaded',
        timeout:7000,
        referer:'https://sdet.live'
      });

       let userName=page.locator("#login-username");
       let pwdFeild=page.locator("#login-password");
       let loginBtn=page.locator("#js-login-btn");
       let errMsg=page.locator("#js-notification-box-msg");

       //we need to add await or else it will fail the script
       await userName.fill("Swati");
       await pwdFeild.fill("swati123");
       await loginBtn.click();

       await expect(errMsg).toContainText("Your email, password, IP address or location did not match");
       //await page.pause();



      
});

    