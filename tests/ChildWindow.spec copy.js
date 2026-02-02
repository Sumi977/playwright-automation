const {test,expect} = require('@playwright/test')

/*test('handling child window',async({browser}) => {

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

})*/

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })







