const { test, expect } = require('@playwright/test')

test.only('login test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const blinkingLink = await page.locator('.blinkingText');

    await expect(blinkingLink).toHaveAttribute('class', 'blinkingText');

    await page.fill('#username', "rahulshettyacademy");
    await page.fill('#password', "learning");

    await page.locator("//span[normalize-space()='User']").click();

    await page.locator('#okayBtn').click();

    await page.screenshot({ path: 'screenshot.png' })

    await expect(page.locator("//span[normalize-space()='User']")).toBeChecked();

    await page.locator('select.form-control').selectOption('consult');
    //await page.pause();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();

    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await page.locator("#signInBtn").click();

    //console.log(await page.title());

    //console.log(await page.locator('div h4 a').nth(0).textContent());

    //console.log(await page.locator('div h4 a').allTextContents());



    await page.waitForTimeout(5000);


});


test('login test with invalid credential', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await page.fill('#username', "rahulshettyacademyy");
    await page.fill('#password', "abcdfhgkj");
    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await page.waitForTimeout(3000);


});

