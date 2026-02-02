import { test, expect, Page, Locator } from '@playwright/test';
export class LoginPage {

    page: Page;
    userEmailTextbox: Locator;
    passwordTextbox: Locator;
    signInButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userEmailTextbox = page.locator("#userEmail")
        this.passwordTextbox = page.locator("#userPassword")
        this.signInButton = page.locator("[value='Login']")

    }
    async gotoLoginUrl() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }

    async validLogin(username: string, password: string) {
        await this.userEmailTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');

    }


}


