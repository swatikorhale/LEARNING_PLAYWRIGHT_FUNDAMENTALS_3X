import{test,expect, Locator} from '@playwright/test'

test.describe("Handle SVG", ()=>
{
    test.beforeEach(async({page})=>
    {
        await page.goto("https://simplemaps.com/svg/country/in");
    });

    test("locate all states", async({page})=>
    {
       
        page.locator("")

        await page.pause();
    });
});