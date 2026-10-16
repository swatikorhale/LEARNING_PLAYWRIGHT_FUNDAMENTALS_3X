# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Frames\01_iframe_testCase.spec.ts >> Verify iframes
- Location: tests\10_Frames\01_iframe_testCase.spec.ts:3:5

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for locator('#frame-one').contentFrame().locator('#vehicle-output')

```

# Test source

```ts
  1  | import {test,expect, FrameLocator} from '@playwright/test'
  2  | 
  3  | test("Verify iframes", async({page})=>
  4  | {
  5  |      await page.goto("https://app.thetestingacademy.com/playwright/frames/");
  6  | 
  7  |      let vehicleFrame:FrameLocator = page.frameLocator("#frame-one");
  8  | 
  9  |      await vehicleFrame.locator("#RESULT_TextField-1").fill("Xuv 7x");
  10 |      await vehicleFrame.locator("#RESULT_TextField-2").fill("swati");
  11 |      await vehicleFrame.locator("#RESULT_TextField-3").fill("MH12");
  12 |     
  13 |      let slectdropdown=vehicleFrame.locator("#RESULT_RadioButton-1");
  14 |      await slectdropdown.selectOption("Sedan");
  15 | 
  16 |      await vehicleFrame.locator("#RESULT_TextField-4").fill("2015");
  17 |      await vehicleFrame.locator('#RESULT_TextArea-1').fill("It is my dream");
  18 |      await vehicleFrame.getByText("Submit registration").click();
  19 | 
> 20 |      let output=vehicleFrame.locator("#vehicle-output").innerText();
     |                                                         ^ Error: locator.innerText: Test ended.
  21 |      console.log(output);
  22 | 
  23 |      
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | })
```