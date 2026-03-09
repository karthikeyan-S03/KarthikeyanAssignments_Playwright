import {test} from '@playwright/test';


test('Logging in to Salesforce Application',async({page}) => {
    
    await page.goto("https://login.salesforce.com/?locale=in");
    
    await page.locator('#username')
        .fill('dilipkumar.rajendran@testleaf.com');
    
    await page.locator('#password')
        .fill('TestLeaf@2025');
    
    await page.locator('#Login')
        .click();

    await page.locator('.slds-icon-waffle')
        .click();
    
    await page.waitForTimeout(3000);

    await page.getByRole('button',{name:'View All Applications'}).click();

    await page.locator('//*[@id="input-225"]').fill('Sales')
    
    await page.getByTitle("Manage your sales process with accounts, leads, opportunities, and more").click()
    
    await page.waitForTimeout(4000);

    await page.locator('//span[text()="Leads"]').click()

    await page.getByTitle("New").click()

 //   await page.selectOption("")
    

});