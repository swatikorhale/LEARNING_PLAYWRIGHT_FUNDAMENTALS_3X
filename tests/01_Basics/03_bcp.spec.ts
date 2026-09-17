//importing bcp
import { chromium,Browser,BrowserContext,Page } from "@playwright/test";

async function run()
{
     //step 1-Launch browser
     let browser:Browser =await chromium.launch({headless:false});
     console.log("Browser Launched", browser);

    //step 2-create context
    let context:BrowserContext  =await browser.newContext();
    console.log("Context created", context);

    //step 3-create page
    let page:Page =await context.newPage();
    console.log("Page opened",page);

    //cleanup-->interview question we need to close it in reverse order
    await page.close();
    await context.close();
    await browser.close();
}