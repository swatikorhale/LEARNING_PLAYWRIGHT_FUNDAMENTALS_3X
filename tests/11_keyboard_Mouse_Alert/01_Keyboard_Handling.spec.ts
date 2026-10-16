import{test,expect} from '@playwright/test'

test("verify keyboard handling", async({page})=>
{
    await page.goto("https://keycode.info");

    //press A
    await page.keyboard.press('A');
    await page.screenshot({path :'A.png'});

    //press ArrowLeft
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({path:'ArrowLeft.png'});

    //press shift up and down
    await page.keyboard.up("Shift");
    await page.screenshot({path:'Shiftup.png'});

    await page.keyboard.down("Shift");
    await page.screenshot({path:'Shiftdown.png'});

    //press shift+O
    await page.keyboard.press('Shift+O');
    await page.screenshot({path:'Shift+O.png'})
})