import { expect, type Locator, type Page } from '@playwright/test';

let message1: string = 'Hello Typescript';
message1 = 'Bye';
console.log(message1);

let age1: number = 20;
console.log(age1);

let isActive: boolean = true;

let numbers1: number[] = [1, 2, 3, 4, 5, 6, 7.8]

let data: any = 'this is my life';


data = 42;


function add(a: number, b: number): number {
    return a + b;
}
add(2, 5);

let user: { name: string, age: number, location: string } = { name: "Harry", age: 20, location: "" }

user.location = "Canada";

console.log(user.name, user.age, user.location);


class CartPage {
    page: Page;
    cartProducts: Locator;
    cartItems: Locator;
    checkoutButton: Locator;


    constructor(page: any) {
        this.page = page;
        this.cartProducts = page.locator('div li').first();
        this.cartItems = page.locator('.cart');
        this.checkoutButton = page.locator("text=Checkout");

    }

}
