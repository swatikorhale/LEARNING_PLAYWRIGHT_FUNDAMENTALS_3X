import{test,expect, Locator} from '@playwright/test'

test.describe("SVG Elements", ()=>
{

    test.beforeEach(async({page}) =>
    {
        const url="https://www.flipkart.com/search";
        console.log("Before Running any test case")
        await page.goto(url);
    })

    test("Verify the SVG Elements", async({page}) =>
    {
         await page.locator("input[name='q']").first().fill("macmini");

         const svgElements: Locator = page.locator("svg");
         await svgElements.first().click();

         //very imp step if there is problm with page loading
         await page.waitForLoadState('networkidle');

         const titleResults: Locator=page.locator("//div[contains(@data-id,'MPC') or contains(@data-id,'COM') or contains(@data-id,'AIO')]/div/a[2]");

         const count:number=await titleResults.count();
         console.log(count);

         for(let i=0;i<count;i++)
         {
           const title:String | null=await titleResults.nth(i).textContent();
           console.log(title);
         }

         await page.pause();

    }
    )
   
})