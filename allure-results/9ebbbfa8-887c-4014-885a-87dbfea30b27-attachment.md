# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_keyboard_Mouse_Alert\01_Keyboard_Handling.spec.ts >> verify keyboard handling
- Location: tests\11_keyboard_Mouse_Alert\01_Keyboard_Handling.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CERT_COMMON_NAME_INVALID at https://keyboard.info/
Call log:
  - navigating to "https://keyboard.info/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - heading "Your connection is not private" [level=1] [ref=e6]
    - paragraph [ref=e7]:
      - text: Attackers might be trying to steal your information from
      - strong [ref=e8]: keyboard.info
      - text: (for example, passwords, messages, or credit cards).
      - link "Learn more about this warning" [ref=e9] [cursor=pointer]:
        - /url: "#"
    - button "net::ERR_CERT_COMMON_NAME_INVALID" [ref=e11]
  - generic [ref=e12]:
    - button "Back to safety" [ref=e13] [cursor=pointer]
    - button "Advanced" [ref=e14] [cursor=pointer]
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test("verify keyboard handling", async({page})=>
  4  | {
> 5  |     await page.goto("https://keyboard.info");
     |                ^ Error: page.goto: net::ERR_CERT_COMMON_NAME_INVALID at https://keyboard.info/
  6  | 
  7  |     //press A
  8  |     await page.keyboard.press("A");
  9  |     await page.screenshot({path :'A.png'});
  10 | })
```