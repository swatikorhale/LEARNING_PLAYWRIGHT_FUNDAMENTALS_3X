import { test, expect } from '@playwright/test'
import userData from './userData.json';

test("verify data driven test", async ({ page }) => {
    console.log(userData.username);
    console.log(userData.password);

}
)

