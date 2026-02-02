import { test as baseTest } from '@playwright/test'
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
    countryName: string;
}

export const customtest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>(
    {
        testDataForOrder: {
            username: "johnsmith26@gmail.com",
            password: "Learning@26",
            productName: "ZARA COAT 3",
            countryName: " United States"
        }


    }
)