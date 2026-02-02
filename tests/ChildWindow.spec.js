const {test,expect} = require('@playwright/test')

test('handling child window',async({browser}) => {

    const context = await browser.newContext();

    const page1 = await context.newPage();
    
    await page1.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const blinkingLink = await page1.locator('.blinkingText');

    const promisePage = context.waitForEvent('page');

    blinkingLink.click();
    const newPage = await promisePage;

    await expect(newPage).toHaveTitle('RS Academy');

    const text = await newPage.locator('.red').textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0]
    //console.log(domain);

    await page1.locator('#username').fill(domain);
    await page1.pause();
    console.log(await page1.locator('#username').inputValue());


    //console.log(text);

    await page1.waitForTimeout(3000);

    await newPage.waitForTimeout(3000);

    await browser.close();

})

/* 

    const allPages = context.pages();

    console.log("number of pages created:",allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');

    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();









*/ 