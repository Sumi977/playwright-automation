const {test, expect} = require ('@playwright/test');

test.only('calender validation', async({page}) => {

    const monthNum = "6";
    const date = "15";
    const year = "2027";

    const expectedList = [monthNum,date,year];

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();

    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNum)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();

    await page.locator('.react-date-picker__inputGroup').first().waitFor();

    const inputs = await page.locator('.react-date-picker__inputGroup__input');

    for(let i=0; i<expectedList.length; i++){
        const value = await inputs.nth(i).inputValue();
    
        console.log(value);
        expect(inputs.nth(i)).toHaveValue(expectedList[i]);
    }

})

test("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months [type='button']").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();

 
    const inputs =  page.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        console.log(value);
        await expect(inputs.nth(i)).toHaveValue(expectedList[i]);
 
    }

    await page.waitForTimeout(3000);
 })
