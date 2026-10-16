# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_keyboard_Mouse_Alert\06_JSAlerts.spec.ts >> Verify js Alerts >> JS Alert Accept 1
- Location: tests\11_keyboard_Mouse_Alert\06_JSAlerts.spec.ts:11:9

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
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test.describe("Verify js Alerts", ()=>
  4  | {
  5  |     //before each test case it will open url
  6  |     test.beforeEach(async({page})=>
  7  |     {
> 8  |         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  |     })
  10 | 
  11 |     test("JS Alert Accept 1",async({page}) =>{
  12 |         page.once('dialog',async dialog =>
  13 |         {
  14 |             await dialog.accept();
  15 |         })
  16 | 
  17 |       await page.getByRole('button', {name:"Click for JS Alert"}).click();
  18 | 
  19 |     });
  20 | 
  21 |     // test("JS Alert Accept 2",async({page}) =>{
  22 | 
  23 |     // });
  24 | 
  25 |     // test("JS Alert Accept 3",async({page}) =>{
  26 | 
  27 |     // });
  28 | 
  29 | 
  30 | });
  31 | 
```