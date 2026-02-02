import { test, expect, Locator, Page } from '@playwright/test';
export class DashboardPage {

    productsText: Locator;
    products: Locator;
    cart: Locator;



    constructor(page: Page) {

        this.productsText = page.locator('.card-body b');
        this.products = page.locator('#products .card');
        this.cart = page.locator("[routerlink*='cart']");

    }
    async searchProductAddToCart(productName: string) {
        const count = await this.products.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            const title = await this.productsText.nth(i).textContent();
            console.log(title);
            if (await this.products.nth(i).locator('b').textContent() === productName) {
                // Add  To Cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;

            }
        }
    }

    async navigateToCart() {
        await this.cart.click();
    }
}

