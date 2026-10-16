import{test,expect, Locator} from '@playwright/test'

test.describe("Handle SVG", ()=>
{
    test.beforeEach(async({page})=>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/svg");
    });

    test("locate Svg root and assert if visible", async({page})=>
    {
        //click on circle and get the input
        const circleShape:Locator= page.locator("#circle-red");
        await circleShape.click();

        const output=await page.locator('#shapes-output').innerText();
        console.log(output);
        expect(output).toContain("Red circle");

        //click on bar 3
        await page.getByRole('button', {name : /Q3 bar/}).click();

        //click on start 4
        await page.getByRole('radio', {name : '4 stars'}).click();


        //fetching all values of bar
        let AllbarValues=await page.locator(".bar").all();
            
        console.log("All bars with its height:");

        for(const bar of AllbarValues)
        {
            const q=await bar.getAttribute("data-quarter");
            const h=await bar.getAttribute("height");

            console.log(q+ "->" +h);
        }

        await page.pause();
    });
});