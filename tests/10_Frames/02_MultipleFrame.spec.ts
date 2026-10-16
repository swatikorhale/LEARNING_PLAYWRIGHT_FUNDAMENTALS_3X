import { test, expect, FrameLocator, Locator } from '@playwright/test'

test("Verify multiple frames", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    //find the title of mainframe
    let mainframe: FrameLocator = await page.frameLocator("frame[name='main']");
    const headerText = await mainframe.locator("h2").innerText();
    console.log(headerText);

    //count no of frames
    const allframe: Locator[] = await page.locator("//frame").all();
    console.log("total number of frames:" + allframe.length);

    //iterate through each frame and print its title and link
    for (const frame of allframe) {
        //console.log(await frame.getAttribute("name"));
        console.log(await frame.getAttribute("name"), ':', await frame.getAttribute("src"));
    }

    //click on side frame and click on link
    let sideframe: FrameLocator = await page.frameLocator("frame[name='side']");
    await sideframe.getByTestId("side-link-registration").click();

}
)