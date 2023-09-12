import { expect, test } from '@playwright/test';

test.describe.configure({ mode: "serial"} );

test('Login 1', async ({ page }) => {
   await page.goto("https://demoqa.com/login");
   await page.getByPlaceholder('UserName', { exact: true }).fill(process.env.USERNAME!);
   await page.getByPlaceholder('Password', { exact: true }).fill(process.env.PASSWORD!);
   await page.locator("#login").click();
   await expect(page.locator("#userName-value")).toHaveText(process.env.USERNAME!);
});

test.only('Login 2', async ({ page }) => {
    await page.goto("/profile");
    await expect(page.locator("#userName-value")).toHaveText(process.env.USERNAME!);    
});