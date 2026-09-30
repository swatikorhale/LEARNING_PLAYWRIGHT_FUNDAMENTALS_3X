import {test,expect} from '@playwright/test'

test('verify the methods in multiple elements', async({page}) =>
{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //nmal way to select checkbox
    //await page.locator("//td[text()='Ananya.Iyer']/preceding-sibling::td/input").click();

    //Playwright one :has(selector)
    await page.locator("tr:has(td:text('Rohan.Mehta'))")
    .locator('input')
    .first()
    .click();
})