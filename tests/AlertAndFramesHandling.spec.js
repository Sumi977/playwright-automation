const {test, expect} = require('@playwright/test');

test('alert and iframes test', async({page}) => {

    page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    page.on('dialog',dialog =>{
        dialog.accept();

    })

    await page.locator('#confirmbtn').click();

    const framePage = await page.frameLocator('#courses-iframe');

    await framePage.locator("li a[href*='lifetime-access']:visible").click();

    const textCheck = await framePage.locator('.text h2').textContent();

    console.log(textCheck.split(" ")[1]);


});