import { test, expect, Locator } from '@playwright/test'
import path from 'path';

test.describe("File Upload", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
        await page.goto(url);
    })

    test("Verify the file upload", async ({ page }) => {
        //path of the file-you should know
        const filepath = path.join(__dirname, 'abc.txt');
        console.log(filepath);

        await page.locator("#single-upload").setInputFiles([filepath]);
        
        await page.pause();

    }
    )

})