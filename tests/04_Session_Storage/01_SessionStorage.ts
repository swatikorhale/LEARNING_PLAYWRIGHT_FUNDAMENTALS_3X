import {chromium} from 'playWright';
import dotenv from "dotenv";

//dotenv-libary to read details from .env file
dotenv.config();

const VWO_USER=process.env.VWO_USER;
const VWO_PASS=process.env.VWO_PASS;

async function saveSession() {
    //creation of bcp
    let browser= await chromium.launch({headless:false});
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.waitForTimeout(2000);

    //Login part
    await page.goto("https://app.wingify.com/#/login");
    await page.fill("#login-username", VWO_USER);
    await page.fill("#login-password",VWO_PASS);
    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/,{timeout:5000});
    await page.waitForTimeout(3000);

    await context.storageState({path: "./user.session.json"});
    console.log("Session saved to user.session.json");

    await page.waitForTimeout(3000);
    await browser.close();
}
saveSession();