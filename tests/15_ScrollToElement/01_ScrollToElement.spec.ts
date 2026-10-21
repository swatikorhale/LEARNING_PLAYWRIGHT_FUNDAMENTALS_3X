import { test, expect, Locator } from '@playwright/test'
import path from 'path';

test.describe("scroll handling", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://app.thetestingacademy.com/playwright/widgets/scroll";
        await page.goto(url);
    })

    test("Verify the scroll to element", async ({ page }) => {

        //1st way
        await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded();

        //2nd way
        await page.evaluate(() => window.scrollBy(0, 1000));

        //3rd way jump to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        //jump back to top
        await page.evaluate(() => window.scrollTo(0, 0));

        await page.pause();

    }
    )

})