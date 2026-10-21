import { test, expect, Locator } from '@playwright/test'
import path from 'path';

test.describe("File Upload handling", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://patternfly.org/components/file-upload/multiple-file-upload/";
        await page.goto(url);
    })

    test("Verify the file upload", async ({ page }) => {
        //path of the file-you should know

         const file1Path=path.join(__dirname,'file1.jpg');
         const file2Path=path.join(__dirname,'file2.jpg');
         console.log(file1Path);
         console.log(file2Path);

        
         await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles([file1Path,file2Path]);

         const uploadArea=page.locator("div.pf-v6-c-multiple-file-upload__status");
         expect(uploadArea).toContainText('file1.jpg');
         expect(uploadArea).toContainText('file2.jpg');


        await page.pause();

    }
    )

})