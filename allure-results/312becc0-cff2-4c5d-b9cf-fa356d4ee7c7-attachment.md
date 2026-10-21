# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 17_Page_Object_Model\tests\pom.spec.ts >> Login with valid credential
- Location: tests\17_Page_Object_Model\tests\pom.spec.ts:4:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "TTACart"
Received: "TTACart - Products"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "TTACart - Products"

```

```yaml
- complementary:
  - button "Close menu": ×
  - link "All Items":
    - /url: ./inventory.html
  - link "About":
    - /url: https://app.thetestingacademy.com/
  - link "Logout":
    - /url: "#"
  - link "Reset App State":
    - /url: "#"
- banner:
  - button "Open menu":
    - img
  - text: TTACart
  - link "Shopping cart":
    - /url: ./cart.html
    - img
- text: Products
- combobox "Sort products":
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- main:
  - article:
    - link:
      - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
    - link "Test.allTheThings() T-Shirt (Red)":
      - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
    - text: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-bike-light
    - link "TTA Bike Light":
      - /url: ./inventory-item.html?id=tta-bike-light
    - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-bolt-tshirt
    - link "TTA Bolt T-Shirt":
      - /url: ./inventory-item.html?id=tta-bolt-tshirt
    - text: Get your testing superhero on with the TTA bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-fleece-jacket
    - link "TTA Fleece Jacket":
      - /url: ./inventory-item.html?id=tta-fleece-jacket
    - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-junior-tester-onesie
    - link "TTA Junior Tester Onesie":
      - /url: ./inventory-item.html?id=tta-junior-tester-onesie
    - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-practice-backpack
    - link "TTA Practice Backpack":
      - /url: ./inventory-item.html?id=tta-practice-backpack
    - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
    - button "Add to cart"
- contentinfo:
  - link "Twitter":
    - /url: https://twitter.com/TheTestingAcad
    - img
  - link "Facebook":
    - /url: https://facebook.com/
    - img
  - link "LinkedIn":
    - /url: https://linkedin.com/
    - img
  - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
  - link "Terms of Service":
    - /url: https://app.thetestingacademy.com/
  - text: "|"
  - link "Privacy Policy":
    - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | 
  4  | test('Login with valid credential', async ({ page }) => {
  5  |     const loginpage = new LoginPage(page);
  6  | 
  7  |     await loginpage.goto();
  8  |     await loginpage.login('standard_user', 'tta_secret');
  9  | 
> 10 |     await expect(page).toHaveTitle('TTACart');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  11 | });
```