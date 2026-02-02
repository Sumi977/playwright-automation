const {test,expect} = require('@playwright/test')
test('date picker', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker','05/28/2009');


    //date picker

    const year = "2027";
    const month = "July";
    const date = "30";

    await page.click('#datepicker')
    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if((currentMonth == month && currentYear == year))
            {
            break;

            }
        await page.locator("[title='Next']").click();
    }
    //date selection using loop
    /*const dates = await page.$$("//a[@class='ui-state-default']");

    for(const day of dates)
    {
        if(await day.textContent() == date)
        {
            await day.click();
            break;
        }
    }*/


     await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click(); 

    await page.waitForTimeout(5000);



});