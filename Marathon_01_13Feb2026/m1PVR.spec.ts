import {test, expect} from '@playwright/test';

test.use({
  permissions: [],   // blocks location popup
});

test ("PVR Cinemas Seat Booking", async ({page}) =>{

    const row = 'F';
    const seat = '15';

    await page.goto("https://www.pvrcinemas.com/");
    await page.locator('.cities-show').click();
    await page.locator('span', { hasText: 'Chennai' }).click();
    await page.locator('(//div[@class="date-show"]/span)[2]').click();
    await page.locator('span', { hasText: 'Select Cinema' }).click();
    await page.locator('//li[@class="p-dropdown-item"]').nth(3).click();
    await page.locator('//li[@class="p-dropdown-item"]').nth(1).click();
    await page.waitForTimeout(2000);
    await page.locator('//li[@class="p-dropdown-item"]').nth(1).click();
    await page.waitForTimeout(2000);
    await page.locator('//li[@class="p-dropdown-item"]').nth(1).click();
    await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']/span").click();
    await page.getByText('Accept').click();
    await page.waitForTimeout(2000);
    await page.locator(`//span[contains(@id,'|${row}:${seat}')]`).click();
    await page.waitForTimeout(1000);
    await expect(page.locator('//div[@class="seat-number"]/p')).toHaveText(`${row}${seat}`);
    
    const ticketAmount = await page.locator('.grand-prices').innerText();
    console.log("The total ticket amount is: ",ticketAmount);

    await page.locator('//button[text()="Proceed"]').click();
    await page.waitForTimeout(5000);
})