import test from '@playwright/test';


test('Logging in to Salesforce Application',async({page}) => {
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    await page.locator('#username').fill('Demosalesmanager');
    
    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    await page.locator('xpath=//*[@id="button"]/a/img').click();

    await page.getByText("Leads", { exact: true }).click();

    await page.getByText('Create Lead', { exact: true }).click();

    await page.locator('#createLeadForm_companyName').fill('Prodapt');

    await page.locator('#createLeadForm_firstName').fill('Karthikeyan');

    await page.locator('#createLeadForm_lastName').fill('Sukumar');

    await page.locator('#createLeadForm_generalProfTitle').fill('MR'); 
    
    await page.locator('#createLeadForm_generalProfTitle').fill('Test Lead'); 
        
    await page.locator('#createLeadForm_annualRevenue').fill('1500000'); 

    await page.locator('#createLeadForm_departmentName').fill('Playwright');

    await page.waitForTimeout(3000);

    await page.locator('//*[@id="createLeadForm_primaryPhoneNumber"]').fill('9962916866'); 

    await page.locator('xpath=//input[@value="Create Lead"]').click(); 

});