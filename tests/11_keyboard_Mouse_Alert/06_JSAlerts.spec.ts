import { test, expect } from '@playwright/test'

test.describe("Verify js Alerts", () => {
    //before each test case it will open url
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    })

    test("JS Alert Accept 1", async ({ page }) => {

        page.once('dialog', async dialog => {
            console.log("Alert Type:", dialog.type);
            console.log("Alert Message:", dialog.message);

            expect(dialog.type).toBe("confirm");
            expect(dialog.message).toBe("I am a JS Confirm");

            await dialog.accept();

        })
        await page.getByRole('button', {
            name: "Click for JS Confirm"
        }).click();
        await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

        //await page.pause();
    });

    //accept and dismiss
    test("JS Alert Accept 2", async ({ page }) => {

        page.once('dialog', async dialog => {
            console.log("Alert Type:", dialog.type);
            expect(dialog.type).toBe('alert');

            console.log("Alert Message:", dialog.message);
            expect(dialog.message).toBe("I am a JS Alert");

            await dialog.accept();
            //await dialog.dismiss();
        });
        await page.getByRole('button', { name: "Click for JS Alert" }).click();
        await expect(page.locator("#result")).toHaveText("You clicked: Ok");

    });

    
    test("JS Alert Accept 3", async ({ page }) => {

    const inputText = "Hello from Swati";

    page.once('dialog', async dialog => {
        console.log("Dialog Type:", dialog.type);
        console.log("Dialog Message:", dialog.message);

        expect(dialog.type).toBe("prompt");
        expect(dialog.message).toBe("I am a JS prompt");

        await dialog.accept(inputText);
    });

    await page.getByRole('button', {
        name: "Click for JS Prompt"
    }).click();

    await expect(page.locator("#result"))
        .toHaveText(`You entered: ${inputText}`);
});

});
