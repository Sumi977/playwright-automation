import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage.'
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { OrderDetailsPage } from './OrderDetailsPage';
import { OrderHistoryPage } from './OrderHistoryPage';

import { Page } from '@playwright/test';



export class POManager {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    orderDetailsPage: OrderDetailsPage;
    orderHistoryPage: OrderHistoryPage;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderDetailsPage = new OrderDetailsPage(this.page);
        this.orderHistoryPage = new OrderHistoryPage(this.page);

    }
    getLoginPage() {
        return this.loginPage;
    }

    getCartPage() {
        return this.cartPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getOrderDetailsPage() {
        return this.orderDetailsPage;
    }
    getOrderHistoryPage() {
        return this.orderHistoryPage;
    }
}
