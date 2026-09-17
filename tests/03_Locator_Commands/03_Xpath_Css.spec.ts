import {test,expect} from '@playwright/test'

test('Verify erromsg on Wingify', async({page})=>
{
      await page.goto("https://wingify.com/free-trial/")

       let bmail=page.locator("//input[@id='free-trial-step1-email']");
       await bmail.fill("swati");

       await page.locator("input[id='free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox']").click();

       await page.locator("//input[@data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();

       await page.locator("//button[@data-qa='page-su-submit']").first().click();

       let errMsg=page.locator("//div[contains(@class,'invalid-reason')]").first();
       //to get text
       let errMsgText=await errMsg.textContent();
       console.log(errMsgText);

      expect(errMsgText).toContain("The email address you entered is incorrect.");


})