import { test, expect, Locator, Page } from '@playwright/test';

export class OrderHistoryPage {

    orderTable: Locator;
    rows: Locator;
    orderdIdDetails: Locator;




    constructor(page: Page) {
        this.orderTable = page.locator('tbody');
        this.rows = page.locator('tbody tr');
        this.orderdIdDetails = page.locator(".col-text");
    }

    async searchForOrderIdAndSelect(orderId: any) {
        await this.orderTable.waitFor();
        const count = await this.rows.count();
        console.log(count);

        for (let i = 0; i < await count; i++) {
            const rowOrderId = await this.rows.nth(i).locator('th').textContent();
            if (await orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator('button').first().click();
                break;
            }
        }

    }
    async getOrderId() {
        return await this.orderdIdDetails.textContent();

    }


}
