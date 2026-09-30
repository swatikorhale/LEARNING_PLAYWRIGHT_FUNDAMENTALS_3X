import {test,expect} from "@playwright/test";

test('Verify Webtable', async({page}) =>
{
         await page.goto("https://awesomeqa.com/webtable.html");

         //step 1-> find Xpath of Helen bennet and then divide and conqure
         //table[@id='customers']/tbody/tr[5]/td[2]

         //first-->table[@id='customers']/tbody/tr[5 -->
         //i->5 row ->1 to 7 (1 header) 2 to 7;
         //second--> ]/td[
         //2->j j->1,2,3
         //third->]

         const firstpart="//table[@id='customers']/tbody/tr[";
         const secondPart="]/td[";
         const thirdPart="]";

         //step 2
         const rows= await page.locator("//table[@id='customers']/tbody/tr").count();
         const columns=await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

         //Step 3 for loop to itearte through each row and cilumn
         for(let i=2;i<=rows;i++)           //skipping header row
         {
            for(let j=1; j<=columns;j++)
            {
  
                const dynamicPath=`${firstpart}${i}${secondPart}${j}${thirdPart}`;
                //console.log(dynamicPath);         
                //it will print locator of all column values from table

                const data=await page.locator(dynamicPath).innerText();
                //console.log(data);
                //it will print Text of all column values from table

                if(data.includes('Helen Bennett'))
                {
                    const countryPath=`${dynamicPath}/following-sibling::td`;
                    const countryText=await page.locator(countryPath).innerText();

                    console.log("-----------");
                    console.log(`Helen Benet is in - ${countryText}`);

                }

                await page.pause();

            }
         }

}
)