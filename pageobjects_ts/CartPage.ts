
import { test, expect, Locator, Page } from '@playwright/test';

export class CartPage {

    cartProducts: Locator;
    cartItems: Locator;
    checkoutButton: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.cartProducts = page.locator('div li').first();
        this.cartItems = page.locator('.cart');
        this.checkoutButton = page.locator("text=Checkout");

    }

    async verifyProductIsDisplayed(productName: string) {
        const locator = this.getProductLocator(productName);
        await expect(locator).toBeVisible();

    }
    async checkout() {
        await this.checkoutButton.click();
    }

    getProductLocator(productName: string) {
        return this.page.locator("h3:has-text('" + productName + "')");

    }


}


/*async searchProductBuyNowButton(productName) {
       const count = await this.cartItems.count();
       console.log(count);
       for (let i = 0; i < count; i++) {
           if (await this.cartItems.nth(i).locator('h3').textContent() === productName) {
               await this.checkoutButton.click();
               break;

           }

       }
   }*/