const { test, expect } = require('@playwright/test');

//test.describe.configure({ mode: 'parallel' });
test('@Web browser context playwright test', async ({ browser }) => {
    //chrome- plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.route('**/*.css', route => route.abort());
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.pause();
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle('Automation Testing Practice');


});

test('playwright test using page fixture', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    console.log(await page.title());
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

})