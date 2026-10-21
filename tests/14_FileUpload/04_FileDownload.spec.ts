import { test, expect, Locator } from '@playwright/test'
import path from 'path';

test.describe("File download handling", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
        await page.goto(url);
    })

    test("Verify the file download", async ({ page }) => {


        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId("download-static").click()

        ]);

        await staticDownload.saveAs('./out/' + staticDownload.suggestedFilename());

        await page.pause();

    }
    )

})