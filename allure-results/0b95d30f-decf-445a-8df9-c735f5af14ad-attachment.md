# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Dropdown\03_MultiSelect_Dropdown.spec.ts >> Verify Custom dropdown
- Location: tests\09_Dropdown\03_MultiSelect_Dropdown.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Playwright', { exact: true }).first()
    - locator resolved to <div role="option" class="tta-rs__option" data-value="Playwright">Playwright</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    38 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test("Verify Custom dropdown", async({page})=>
  4  | {
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
  6  |     
  7  |     //clicked on dropdown
  8  |     await page.locator("#rs-multi").click();
  9  | 
  10 |     //select multiple values
  11 |     await page.getByText("Mocha",{exact:true}).first().click();
  12 |     await page.getByText("Cucumber",{exact:true}).first().click();
> 13 |     await page.getByText("Playwright",{exact:true}).first().click();
     |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  14 | 
  15 | 
  16 |     //to close that dropdown window need to escape
  17 |     await page.keyboard.press("Escape");
  18 | 
  19 |     await page.pause();
  20 | 
  21 | })
```