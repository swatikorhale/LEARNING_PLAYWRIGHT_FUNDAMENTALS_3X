import {test,expect} from '@playwright/test';

//Load the saved seesion from session storage file

test.use(
{
storageState : './user.session.json'
}
)

test("Test1-go directly to dashboard- no login", async({page}) =>
{
       await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
       await expect(page).toHaveURL(/dashboard/);
       console.log("dashboard loaded- no login needed");
       await page.waitForTimeout(5000);
}
)

test("Test2-go directly to dashboard- no login", async({page}) =>
{
       await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
       await expect(page).toHaveURL(/dashboard/);
       console.log("dashboard loaded- no login needed");
       await page.waitForTimeout(5000);
}
)