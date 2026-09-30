import{test,expect} from '@playwright/test'

test('Basic verify to handle multiple elements', async({page})=>
{
      await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
      
      //find all navigation link list
     const RightPanelLinkText:String[] =await page.locator(".list-group-item").allInnerTexts();
     console.log("Number of Links:" +RightPanelLinkText.length);

     //print all links Text through iterating
    console.log("Printing all the links text...")
     for(const linkText of RightPanelLinkText)
     { 
        console.log(linkText);
     }

     //click on particular link -Forgotten Password
     for(const linkText of RightPanelLinkText)
     {
        if(linkText==='Forgotten Password')
        {
           await page.getByText(linkText).nth(3).click();
        }
     }

      //await page.pause();

      //Getting all the attributes
      //stories all links
      const RightPanelLinks=await page.locator(".list-group-item").all();
      console.log("Printing getattributes of all the links...")
      for(const link of RightPanelLinks)
      {
         console.log(await link.getAttribute("href"));
      }
      


})