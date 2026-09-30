import {test,expect} from '@playwright/test'

test("Automate OrangeHRM", async({page}) =>
{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   const userName="admin";
   const password="admin123";
})
