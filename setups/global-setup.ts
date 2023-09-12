import { test as setup, expect } from '@playwright/test';

const golbalAuth = './.auth/global_auth.json'

setup('Authenticate Once', async ({ page, baseURL }) => {
    await page.goto(baseURL + "/login");
    await page.getByPlaceholder('UserName', { exact: true }).fill(process.env.USERNAME!);
    await page.getByPlaceholder('Password', { exact: true }).fill(process.env.PASSWORD!);
    await page.locator("#login").click();
    await page.waitForURL(baseURL + '/profile');
    await expect(page.locator("#userName-value")).toHaveText(process.env.USERNAME!);
    await page.context().storageState({ path: golbalAuth });
});