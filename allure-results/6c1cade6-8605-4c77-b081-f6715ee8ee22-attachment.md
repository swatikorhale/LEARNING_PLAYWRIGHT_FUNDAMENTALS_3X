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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph
  - generic [ref=e19]:
    - separator [ref=e20]
    - generic [ref=e21]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e22] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test.describe("Verify js Alerts", ()=>
  4  | {
  5  |     //before each test case it will open url
> 6  |     test.beforeEach(async({page})=>
     |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  7  |     {
  8  |         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  9  |     })
  10 | 
  11 |     test("JS Alert Accept 1",async({page}) =>{
  12 |         page.once('dialog',async dialog =>
  13 |         {
  14 |             await dialog.accept();
  15 |         })
  16 |       await page.getByRole('button', {name:"Click for JS Alert"}).click();
  17 |       await page.pause();
  18 |     });
  19 | 
  20 |     // test("JS Alert Accept 2",async({page}) =>{
  21 | 
  22 |     // });
  23 | 
  24 |     // test("JS Alert Accept 3",async({page}) =>{
  25 | 
  26 |     // });
  27 | 
  28 | 
  29 | });
  30 | 
```