import{test,expect} from "@playwright/test"
import { title } from "node:process";

test('verify cura healthcare service', async({page}) =>
    {
          await page.goto("https://katalon-demo-cura.herokuapp.com/",
            {
              waitUntil:'load',
              timeout:6000
            }
          );

          //verify title
          await expect(page).toHaveTitle("CURA Healthcare Service");

          let appointmentBtn=page.locator("#btn-make-appointment");
          await appointmentBtn.click();

          let userName=page.locator("input#txt-username");
          let pwd=page.locator("input#txt-password");
           
          await userName.fill("John Doe");
          await pwd.fill("ThisIsNotAPassword");

          let loginBtn=page.locator("#btn-login");
          await loginBtn.click();

          let infoMsg=page.locator("//h2[text()='Make Appointment']");
          
          await expect(infoMsg).toContainText("Make Appointment");


});

         