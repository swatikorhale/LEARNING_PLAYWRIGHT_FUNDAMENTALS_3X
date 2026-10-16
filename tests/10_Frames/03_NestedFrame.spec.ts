import{test,expect} from '@playwright/test'

test("verify nested frame", async({page})=>
{
    await page.goto("https://selectorshub.com/iframe-scenario/");

    const frame1 = page.frameLocator("#pact1");
    const frame2 = frame1.frameLocator("#pact2");
    const frame3 = frame2.frameLocator("#pact3");

    await frame1.locator("#inp_val").first().fill("Swati");
    await frame2.locator("#jex").fill("bharath");
    await frame3.locator("#glaf").fill("Happy life");

    let frame1headerText=await frame1.locator("h3").innerText();
    console.log(frame1headerText);
    await page.waitForTimeout(5000);

})