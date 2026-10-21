import { test, expect, Locator } from '@playwright/test'
import path from 'path';

test.describe("File Upload", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://the-internet.herokuapp.com/upload";
        await page.goto(url, { waitUntil: 'networkidle' });
    })

    test("Verify the file upload", async ({ page }) => {
        //path of the file-you should know
        const filepath = path.join(__dirname, 'abc.txt');
        console.log(filepath);

        await page.locator("#file-upload").setInputFiles([filepath]);
        await page.getByRole("button", { name: 'Upload' }).click();
        expect(page.locator("#uploaded-files")).toContainText('abc.txt');
        console.log(await page.locator("//h3").innerText());
        await page.pause();

    }
    )

})