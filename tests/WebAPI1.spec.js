const { test, expect, request } = require('@playwright/test');
import { APIUtils } from '../utils/APIUtils';

const loginPayload = { userEmail: "johnsmith26@gmail.com", userPassword: "Learning@26" };
const orderPayload = { orders: [{ country: "Australia", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

let response;

test.beforeAll(async () => {
    //Login APi
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);

    response = await apiUtils.createOrder(orderPayload);


});


/*test.beforeEach( () => {

});*/
test('place the order', async ({ page }) => {


    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);



    await page.goto('https://rahulshettyacademy.com/client/');

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator('tbody').waitFor();

    const rows = await page.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator('th').textContent();
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderSummaryDetail = await page.locator("[class='col-text -main']").textContent();
    await expect(response.orderId.includes(orderSummaryDetail)).toBeTruthy();

    await page.waitForTimeout(3000);




    /*const products = page.locator(".card-body");
    
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
 
    .getByRole("button",{name:"Add to Cart"}).click();
  
    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
  
    //await page.pause();
    await page.locator("div li").first().waitFor();
 
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
  
    await page.getByRole("button",{name :"Checkout"}).click();
  
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
  
    await page.getByRole("button",{name :"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click(); */

    //await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});