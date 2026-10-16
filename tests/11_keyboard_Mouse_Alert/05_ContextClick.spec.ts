import{test,expect, Locator} from '@playwright/test'

//when element contains multiple elements

test("verify Right click", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    page.locator("span.context-menu-one").first().click({button:'right'});

    //print all options after right click
    const allOptions:String[]=await page.locator("ul.context-menu-list span")
    .allInnerTexts();
    console.log(allOptions);

    //click on any option
    await page.getByText('Copy',{exact:true}).first().click();

    await page.pause();
})