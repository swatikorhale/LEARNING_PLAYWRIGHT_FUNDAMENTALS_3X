import { test, expect, Page, Locator } from '@playwright/test'

async function findRowByName(page: Page, name: string): Promise<Locator> {
    let row;

    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });

        if (await row.count()) {
            return row;
        }

        const nextButton = page.getByTestId("next-page");

        if (await nextButton.isDisabled()) {
            throw new Error("Row not found");
        }

        await nextButton.click();
    }
}

test('Verify Webtable pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Luca Greco";

    const row = await findRowByName(page, 'Luca Greco');
    const email = await row.locator("td[data-col='email']").innerText();
    console.log(`${name}`, email);

    const country = await row.locator("td[data-col='country']").innerText();
    console.log(`${name}`, country);

});