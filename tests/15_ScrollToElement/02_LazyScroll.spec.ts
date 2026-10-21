import { test, expect, Locator } from '@playwright/test'
import { log } from 'console';
import path from 'path';

test.describe("scroll handling", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://app.thetestingacademy.com/playwright/widgets/scroll";
        await page.goto(url);
    })

    test("Verify the Lazy scroll", async ({ page }) => {

        //lazy scetion
        await page.getByTestId("section-lazy").scrollIntoViewIfNeeded();
        //lazy list
        await page.getByTestId("lazy-list").scrollIntoViewIfNeeded();

        const list = page.getByTestId("lazy-list").locator("li");
        const initialcount = await list.count();


        //scroll till last existing item in view as from 11 it is not visible
        //so nth(10) should just wait until timeout happen

        await list.last().scrollIntoViewIfNeeded();

        //Adding poll so that it will scroll till 15
        await expect.poll(async () => list.count(),
            {
                message: "expected_items'>10",
                timeout: 10000

            }).toBeGreaterThan(initialcount);

        const finalcount = await list.count();
        console.log(finalcount);


    }
    )

})