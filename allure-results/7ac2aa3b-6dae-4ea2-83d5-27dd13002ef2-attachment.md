# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_FileUpload\02_SingleFileUpload.spec.ts >> File Upload >> Verify the file upload
- Location: tests\14_FileUpload\02_SingleFileUpload.spec.ts:10:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#single-upload')

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test'
  2  | import path from 'path';
  3  | 
  4  | test.describe("File Upload", () => {
  5  | 
  6  |     test.beforeEach(async ({ page }) => {
  7  |         const url = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
  8  |     })
  9  | 
  10 |     test("Verify the file upload", async ({ page }) => {
  11 |         //path of the file-you should know
  12 |         const filepath = path.join(__dirname, 'abc.txt');
  13 |         console.log(filepath);
  14 | 
> 15 |         await page.locator("#single-upload").setInputFiles([filepath]);
     |         ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  16 |         
  17 |         await page.pause();
  18 | 
  19 |     }
  20 |     )
  21 | 
  22 | })
```