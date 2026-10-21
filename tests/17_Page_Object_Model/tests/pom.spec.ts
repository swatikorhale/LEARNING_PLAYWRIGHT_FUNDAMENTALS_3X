import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credential', async ({ page }) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('standard_user', 'tta_secret');

});