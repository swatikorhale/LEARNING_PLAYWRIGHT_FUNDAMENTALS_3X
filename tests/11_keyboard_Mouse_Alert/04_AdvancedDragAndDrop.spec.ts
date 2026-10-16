import{test,expect, Locator} from '@playwright/test'

//when element contains multiple elements

test("verify Advance drag and drop handling", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

   //moving Review PR #21 — flaky test fix this in Inprogress tab

   let source:Locator=page.locator("#card-write-spec");
   const sBox=(await source.boundingBox())!;

   let target:Locator=page.locator("[data-status='in-progress']");
   const tBox=(await target.boundingBox())!;

   await page.mouse.move(sBox.x + sBox.width/2, sBox.y + sBox.height/2);
   await page.mouse.down();

   await page.mouse.move(tBox.x +tBox.width/2, tBox.y+tBox.height/2);
   await page.mouse.up();





   await page.pause();

})