import { test, expect } from '@playwright/test'

test("click on checkbox of rohit Mehta", async ({ page }) => {
      await page.goto("https://app.thetestingacademy.com/playwright/webtable");

      //dynamic Xpath for Rohan Mehta
      //Rohan --> //tbody[@id='employee-body']/tr[3]/td[2]
      //Checkbox--> //tbody[@id='employee-body']/tr[3]/td[2]/preceding-sibling::td/input

      //first part-tbody[@id='employee-body']/tr[
      //i=1 to 10
      //second part=]/td[
      //j=1 to 7
      //third part=]

      const firstPart = "//tbody[@id='employee-body']/tr[";
      const secondPart = "]/td[";
      const thirdPart = "]";

      //Total number of rows and columns for forloop
      const rowsCount = await page.locator("//tbody[@id='employee-body']/tr").count();
      const columnCount = await page.locator("//tbody[@id='employee-body']/tr[1]/td").count(); //-->starts from column value 

      //for loop
      for (let i = 1; i <= rowsCount; i++) {
            for (let j = 1; j <= columnCount; j++) {
                  const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                  //console.log(dynamicPath);
                  const data = await page.locator(dynamicPath).innerText();
                  //console.log(data);

                  if(data.includes('Rohan Mehta'))
                  {
                        const roCheckbox=`${dynamicPath}/preceding-sibling::td/input`;
                        await page.locator(roCheckbox).click();
                  }
            }
      }
      await page.pause();
})