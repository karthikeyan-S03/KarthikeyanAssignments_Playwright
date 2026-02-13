import { test, expect } from '@playwright/test';

test('Decathlon E2E - Shoes Purchase Flow', async ({ page }) => {

  await page.goto('https://www.decathlon.in/');
  await expect(page).toHaveURL(/decathlon/);

// to click on search 
  await page.locator('//span[@class="!mr-1"]').first().click();

  const searchBox = page.getByRole('textbox');
  await expect(searchBox).toBeEnabled();

// to check if search box is enabled
  await searchBox.fill('shoes');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);

// to get the page title
  const title = await page.title();
  console.log('Page Title:', title);
  await expect(page).toHaveTitle(/Search \| shoes/i);

  await page.locator("//span[normalize-space()='Gender']/following::span[contains(text(),'Men')][1]").click();
  await page.locator("//span[normalize-space()='Size']/following::span[contains(text(),'Uk 10.5')]").click();
  await page.locator("//span[normalize-space()='Sport']/following::span[contains(text(),'Running')]").click();

  const firstProduct = page.getByAltText('Men Running and Trail Running Shoes, Kiprun JF 190 Grip - Silver Grey').first();
  await firstProduct.click();

  // to click on size uk 10 & clik on Add to Cart
  await page.locator('(//div[@id="size-select-container"]/div)[7]').click();
  await page.locator('//span[@class="text-white"]').click();

  await page.getByRole("link", { name: "cart" }).nth(0).click();
  const totalAmount = await page.locator('text=₹').first().textContent();
  console.log('Total Cart Amount:', totalAmount);
});


