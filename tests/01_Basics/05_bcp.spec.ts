import{test,expect} from "@playwright/test";

//BCP implementation- here 1 browser->3 context means 3 windows and -->1 page per window
test("BCP in three roles", async ({browser}) => {

    //3 different conext creation-3 windows
    let AdminContext=await browser.newContext();
    let userContext=await browser.newContext();
    let guestContext=await browser.newContext();

    //creating pages
    let adminPage=await AdminContext.newPage();
     await adminPage.goto("https://rahulshettyacademy.com/dropdownsPractise/");

     let userPage=await userContext.newPage();
     await userPage.goto("https://rahulshettyacademy.com/locatorspractice/");

     let guestPage=await guestContext.newPage();
     await guestPage.goto("https://rahulshettyacademy.com/AutomationPractice/");

     //this closing is mandatory
     await adminPage.close();
     await userPage.close();
     await guestPage.close();
    
})