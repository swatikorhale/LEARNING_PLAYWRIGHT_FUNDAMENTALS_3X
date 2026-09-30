import{test,expect} from '@playwright/test'

test('Fetch rows data from webtable', async({page}) =>
{
    await page.goto("https://awesomeqa.com/webtable1.html");

    //locator for all rows css so that we can count it
         const rows=page.locator("table[summary='Sample Table'] tbody tr");
         const rowsCount=await rows.count();
         console.log(rowsCount);

    //for loop to iterate
    for(let i=0; i<rowsCount;i++)
        {
                                  //table[summary='Sample Table'] tbody tr:nth-child(1) td
            const rowsData= await rows.nth(i).locator("td").allInnerTexts();
            console.log(`Row ${i+1}:` +rowsData);

            
        }     
})