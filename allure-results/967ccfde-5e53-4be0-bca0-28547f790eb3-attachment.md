# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_keyboard_Mouse_Alert\03_DragAndDrop.spec.ts >> verify drag and drop handling
- Location: tests\11_keyboard_Mouse_Alert\03_DragAndDrop.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/drag_and_drop", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test("verify drag and drop handling", async({page})=>
  4  | {
> 5  |     await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  6  | 
  7  |    const A=page.locator("#column-a");
  8  |    const B=page.locator("#column-b");
  9  | 
  10 |    await A.dragTo(B);
  11 | 
  12 |    await page.pause();
  13 | 
  14 | })
```