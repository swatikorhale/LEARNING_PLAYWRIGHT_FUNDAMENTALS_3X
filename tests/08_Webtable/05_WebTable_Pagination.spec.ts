import { test, expect } from '@playwright/test'

test('Verify Webtable pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Luca Greco";
    let row;

    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });

        //if that luca found on page then break- for example if found on page1 break from there only
        if (await row.count()) {
            break;
        }

        //click on next button to serach next
        const nextButton = page.getByTestId("next-page");

        //if it is disabled then throw error
        if (await nextButton.isDisabled()) {
            throw new Error("Row not found");
        }

        //else click on next button
        await nextButton.click();

        //find email and country
        //#employees-tbody tr td[data-col='email']- for all email but we already got for luca in row

        const email = await row.locator("td[data-col='email']").innerText();
        console.log(`${name}`, email);

        const country = await row.locator("td[data-col='country']").innerText();
        console.log(`${name}`, country);

    }
})