# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_keyboard_Mouse_Alert\06_JSAlerts.spec.ts >> Verify js Alerts >> JS Alert Accept 3
- Location: tests\11_keyboard_Mouse_Alert\06_JSAlerts.spec.ts:41:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe("Verify js Alerts", () => {
  4  |     //before each test case it will open url
  5  |     test.beforeEach(async ({ page }) => {
> 6  |         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     })
  8  | 
  9  |     test("JS Alert Accept 1", async ({ page }) => {
  10 |         page.once('dialog', async dialog => {
  11 |             console.log("Alert Type:", dialog.type);
  12 |             console.log("Alert Message:", dialog.message);
  13 |             expect(dialog.message).toBe("I am a JS Confirm");
  14 |             await dialog.accept();
  15 | 
  16 |         })
  17 |         await page.getByRole('button', { name: "Click for JS Confirm" }).click();
  18 |         await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
  19 | 
  20 |         //await page.pause();
  21 |     });
  22 | 
  23 |     //accept and dismiss
  24 |     test("JS Alert Accept 2", async ({ page }) => {
  25 |         page.once('dialog', async dialog => {
  26 |             console.log("Alert Type:", dialog.type);
  27 |             expect(dialog.type).toBe('Confirm');
  28 |             console.log("Alert Message:", dialog.message);
  29 |             expect(dialog.message).toBe("I am a JS Alert");
  30 |             await dialog.accept();
  31 |             //await dialog.dismiss();
  32 | 
  33 | 
  34 |         })
  35 |         await page.getByRole('button', { name: "Click for JS Alert" }).click();
  36 |         await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  37 | 
  38 |     });
  39 | 
  40 |     //Tese case 3
  41 |     test("JS Alert Accept 3", async ({ page }) => {
  42 | 
  43 |         const inputText="Hello from Swati";
  44 | 
  45 |         page.once('dialog', async dialog => {
  46 |             console.log("Alert Type:", dialog.type);
  47 |             expect(dialog.type).toBe('Prompt');
  48 |             console.log("Alert Message:", dialog.message);
  49 |             expect(dialog.message).toBe("I am a JS prompt");
  50 |             await dialog.accept(inputText);
  51 |             //await dialog.dismiss();
  52 | 
  53 | 
  54 |         })
  55 |         await page.getByRole('button', { name: "Click for JS Prompt" }).click();
  56 |         await expect(page.locator("#result")).toHaveText("You entered: ${inputText}");
  57 |     });
  58 | 
  59 | 
  60 | });
  61 | 
```