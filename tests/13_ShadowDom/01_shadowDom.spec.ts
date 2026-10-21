import{test,expect, Locator} from '@playwright/test'

test.describe("Shadow dom", ()=>
{

    test.beforeEach(async({page}) =>
    {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom");
    })

    test("Verify shadow dom and loacte it", async({page}) =>
    {
         
        //1st shadow dom-sign in
         const card=page.getByTestId("card-account-card");
         await card.locator("input[name='email']").fill("swatik@gmail.com");
         await card.locator("input[name='password']").fill("abc");
         await card.getByTestId("card-account-submit").click();

         const output=card.getByTestId("card-account-status");
         console.log(await output.innerText());
         expect(output).toContainText("swatik@gmail.com");

         //2nd shadow dom=cart
         const cart=page.getByTestId("counter-cart");
         cart.getByRole("button",{name:'Increment'}).click();
         cart.getByRole("button",{name:'Increment'}).click();
         await expect(cart.getByTestId("counter-value")).toHaveText("5");
         
         //3rd shadow dom
         const nestedhost=page.getByTestId("nested-host");
         await nestedhost.getByTestId("card-inside-email").fill("abc@gmail.com");
         await nestedhost.getByTestId("card-inside-password").fill("abc");
         await nestedhost.getByTestId("card-inside-submit").click();
         
         await page.pause();

    }
    )
   
})