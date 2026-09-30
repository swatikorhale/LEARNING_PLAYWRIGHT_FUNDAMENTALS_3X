import {test,expect} from '@playwright/test'

test('verify the methods in multiple elements', async({page}) =>
{
      await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
     
      //filter method 
      const forgotPwdlink=page.locator('a.list-group-item').
                         filter({hasText:'Forgotten Password'});

      await forgotPwdlink.click();     
      
      //2nd example
      const privacyLink=page.locator("footer a").filter
      ({hasText:'Privacy Policy'});

       await expect(privacyLink).toHaveAttribute("href");

       await page.pause();
}) 