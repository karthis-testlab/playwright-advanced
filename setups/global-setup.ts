import { test as setup, expect, Browser, Page, chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {

    const { baseURL, storageState } = config.projects[0].use;
    const browser: Browser = await chromium.launch({
        headless: true,
        timeout: 1000
    });
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto(baseURL + "/login");
    await page.getByPlaceholder('UserName', { exact: true }).fill(process.env.USERNAME!);
    await page.getByPlaceholder('Password', { exact: true }).fill(process.env.PASSWORD!);
    await page.locator("#login").click();
    await expect(page.locator("#userName-value")).toHaveText(process.env.USERNAME!);

    await page.context().storageState({ path: storageState as string});

    await browser.close();
    
}

export default globalSetup;