# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 17_Page_Object_Model\tests\pom.spec.ts >> Login with valid credential
- Location: tests\17_Page_Object_Model\tests\pom.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "YOUR_URL", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly username: Locator;
  6  |     readonly password: Locator;
  7  |     readonly loginButton: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.username = page.locator('#user-name');
  12 |         this.password = page.locator('#password');
  13 |         this.loginButton = page.locator('#login-button');
  14 |     }
  15 | 
  16 |     async goto() {
> 17 |         await this.page.goto('YOUR_URL');
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  18 |     }
  19 | 
  20 |     async login(username: string, password: string) {
  21 |         await this.username.fill(username);
  22 |         await this.password.fill(password);
  23 |         await this.loginButton.click();
  24 |     }
  25 | }
```