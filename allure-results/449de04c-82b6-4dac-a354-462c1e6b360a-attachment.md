# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_SVG\02_svg_advance.spec.ts >> Handle SVG >> locate Svg root and assert if visible
- Location: tests\12_SVG\02_svg_advance.spec.ts:10:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: /4 stars/ })

```

# Test source

```ts
  1  | import{test,expect, Locator} from '@playwright/test'
  2  | 
  3  | test.describe("Handle SVG", ()=>
  4  | {
  5  |     test.beforeEach(async({page})=>
  6  |     {
  7  |         await page.goto("https://app.thetestingacademy.com/playwright/widgets/svg");
  8  |     });
  9  | 
  10 |     test("locate Svg root and assert if visible", async({page})=>
  11 |     {
  12 |         //click on circle and get the input
  13 |         const circleShape:Locator= page.locator("#circle-red");
  14 |         await circleShape.click();
  15 | 
  16 |         const output=await page.locator('#shapes-output').innerText();
  17 |         console.log(output);
  18 |         expect(output).toContain("Red circle");
  19 | 
  20 |         //click on bar 3
  21 |         await page.getByRole("button", {name : /Q3 bar/}).click();
  22 | 
  23 |         //click on start 4
> 24 |         page.getByRole("button",{name:/4 stars/}).click();
     |                                                   ^ Error: locator.click: Test ended.
  25 | 
  26 |         ///await page.pause();
  27 |     });
  28 | });
```