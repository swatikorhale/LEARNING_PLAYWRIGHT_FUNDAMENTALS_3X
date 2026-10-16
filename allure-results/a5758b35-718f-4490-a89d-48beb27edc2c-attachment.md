# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Frames\02_Hover.spec.ts >> verify keyboard handling
- Location: tests\10_Frames\02_Hover.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1 | import{test,expect} from '@playwright/test'
  2 | 
  3 | test("verify keyboard handling", async({page})=>
  4 | {
> 5 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6 | })
```