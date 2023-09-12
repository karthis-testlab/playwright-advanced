import { expect, test } from '@playwright/test';

test.describe.configure({ mode: "serial"} );

test.only('Validate User Successfully Logined with Valid Credentials', async ({ page }) => {
    await page.goto("/profile");
    await expect(page.locator("#userName-value")).toHaveText(process.env.USERNAME!);    
});