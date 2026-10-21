# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13_ShadowDom\01_shadowDom.spec.ts >> SVG Elements >> Verify shadow dom and loacte it
- Location: tests\13_ShadowDom\01_shadowDom.spec.ts:11:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.thetestingacademy.com/playwright/widgets/shadow-dom", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect, Locator} from '@playwright/test'
  2  | 
  3  | test.describe("SVG Elements", ()=>
  4  | {
  5  | 
  6  |     test.beforeEach(async({page}) =>
  7  |     {
> 8  |         await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom");
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  9  |     })
  10 | 
  11 |     test("Verify shadow dom and loacte it", async({page}) =>
  12 |     {
  13 |          
  14 |         //1st shadow dom-sign in
  15 |          const card=page.getByTestId("card-account-card");
  16 |          await card.locator("input[name='email']").fill("swatik@gmail.com");
  17 |          await card.locator("input[name='password']").fill("abc");
  18 |          await card.getByTestId("card-account-submit").click();
  19 | 
  20 |          const output=card.getByTestId("card-account-status");
  21 |          console.log(await output.innerText());
  22 |          expect(output).toContainText("swatik@gmail.com");
  23 | 
  24 |          //2nd shadow dom=cart
  25 |          const cart=page.getByTestId("counter-cart");
  26 |          cart.getByRole("button",{name:'Increment'}).click();
  27 |          cart.getByRole("button",{name:'Increment'}).click();
  28 |          await expect(cart.getByTestId("counter-value")).toHaveText("5");
  29 |          
  30 |          //3rd shadow dom
  31 |          const nestedhost=page.getByTestId("nested-host");
  32 |          await nestedhost.getByTestId("card-inside-email").fill("abc@gmail.com");
  33 |          await nestedhost.getByTestId("card-inside-password").fill("abc");
  34 |          await nestedhost.getByTestId("card-inside-submit").click();
  35 |          
  36 |          await page.pause();
  37 | 
  38 |     }
  39 |     )
  40 |    
  41 | })
```