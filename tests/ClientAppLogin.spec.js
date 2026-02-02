const { test, expect } = require('@playwright/test');




test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   //page.route('**/*.{jpg,png,jpeg}', route => route.abort());
   const email = "johnsmith26@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   page.on('request', request => console.log(request.url()));
   page.on('response', response => console.log(response.url(), response.status()));
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Learning@26");
   await page.locator("[value='Login']").click();
   //await page.pause();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

})
