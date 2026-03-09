import {test,expect} from '@playwright/test';


test('Logging in to Salesforce Application',async({page}) => {
    
    await page.goto("https://leafground.com/select.xhtml");

    await page.selectOption(".ui-selectonemenu",{label:'Selenium'})
    //const selectedTool = await page.locator(".ui-selectonemenu").first().textContent();
   // expect(selectedTool).toBe("Selenium");

    //const toolOptions = page.locator('#j_idt87\\:console_input option');
    //const toolCount = await toolOptions.count();

    await page.locator("#j_idt87\\:country_label").click();
    await page.locator("//li[text()='India']").click();

    const selectedCountry = await page.locator("#j_idt87\\:country_label").textContent();
    expect(selectedCountry).toBe("India");

    await page.waitForSelector('#j_idt87\\:city_label');
    await page.waitForTimeout(1000);
    await page.locator("#j_idt87\\:city_label").click();
    await page.locator('//li[text()="Chennai"]').click();

    const selectedCity = await page.locator("#j_idt87\\:city_label").textContent();
    expect(selectedCity).toBe("Chennai");

    await page.getByRole('button').click();

    await page.locator('//li[text()="Appium"]').click();
    await page.getByRole('button').click();
    await page.locator('//li[text()="Playwright"]').click();
    await page.getByRole('button').click(); 
    await page.waitForTimeout(1000);
    await page.locator('//li[text()="RestAssured"]').click();

    await page.waitForTimeout(1000);

    await page.locator('#j_idt87\\:lang_label').click();
    await page.locator('//li[text()="English"]').click();
    await page.locator('//li[text()="Tamil"]').click();


    await page.waitForTimeout(1000);
    await page.locator('#j_idt87\\:value_label').click();
    await page.locator('//li[@id="j_idt87:value_1"]').click();
    await page.waitForTimeout(5000);
})