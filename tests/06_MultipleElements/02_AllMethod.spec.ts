import{test,expect, Locator} from '@playwright/test'

test('Basic verify to handle multiple elements', async({page})=>
{
      await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
      
      //All()--->it will print all the locators
      const RightPanelLinks:Locator[]=await page.locator(".list-group-item").all();
      
      console.log(RightPanelLinks.length);
      for(const link of RightPanelLinks)
      {
         console.log(link);
         console.log(await link.getAttribute("href")); 
         //we can also print attribute here only

      }

    

     


})