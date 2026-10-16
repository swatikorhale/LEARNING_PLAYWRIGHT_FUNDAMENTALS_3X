import{test,expect} from '@playwright/test'

test("verify drag and drop handling", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

   const A=page.locator("#column-a");
   const B=page.locator("#column-b");

   await A.dragTo(B);

   await page.pause();

})