import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'node:inspector';

test('LeafGround Checkbox Automation', async ({ page }) => {
 
    await page.goto('https://leafground.com/checkbox.xhtml');

    const checkbox = page.locator('(//span[text()="Basic"]/preceding-sibling::div)[2]')
    await checkbox.click();

    const checkbox1 = page.getByText('Ajax');
    await checkbox1.click();

    const notificationMsg = page.locator(".ui-growl-message");
    await expect(notificationMsg).toBeVisible();
    console.log("Notification Message:", await notificationMsg.textContent());

    await page.getByText('Python').click();
    await page.getByText('Javascript').click();
    await page.getByText('Java', { exact: true }).click();

    const tristate = page.locator('#j_idt87\\:ajaxTriState .ui-chkbox-box');
    await tristate.click();
    await tristate.click();

    const toggle = page.locator('.ui-toggleswitch-slider');
    await toggle.click();

    const toggleMsg = page.locator('.ui-growl-message').first();
    await expect(toggleMsg).toBeVisible();
    console.log("Toggle Message:", await toggleMsg.textContent());

    const tristateMsg = page.locator('.ui-growl-message').last();
    await expect(tristateMsg).toBeVisible();
    console.log("TriState Message:", await tristateMsg.textContent());

    const state = page.locator('(//div[@class="ui-selectbooleancheckbox ui-chkbox ui-widget"]//input)[3]');
    const currState = await state.getAttribute('aria-label')
   //await expect(currState).toHaveText('Disabled');
   if (currState === 'Disabled'){
    console.log("The element is disabled")
   } else {
     console.log("The element is enabled")
   }

    await page.locator('//ul[@data-label="Cities"]').click();
    await page.waitForTimeout(1000);
    await page.locator('//li[@class="ui-selectcheckboxmenu-item ui-selectcheckboxmenu-list-item ui-corner-all ui-selectcheckboxmenu-unchecked"]//label[text()="London"]').click();
    await page.locator('//li[@class="ui-selectcheckboxmenu-item ui-selectcheckboxmenu-list-item ui-corner-all ui-selectcheckboxmenu-unchecked"]//label[text()="Rome"]').click();
    await page.locator('//li[@class="ui-selectcheckboxmenu-item ui-selectcheckboxmenu-list-item ui-corner-all ui-selectcheckboxmenu-unchecked"]//label[text()="Paris"]').click();
})


test('LeafGround Radio button Automation', async ({ page }) => {
  await page.goto('https://leafground.com/radio.xhtml');
    
  const safariRadio = page.getByLabel('Safari').nth(1);
  await expect(safariRadio).toBeChecked();
  const chromeRadio = page.getByLabel('Chrome').nth(1);
  await expect(chromeRadio).not.toBeChecked();
  const browserRadioText =await safariRadio.getAttribute('value');
  console.log("The default selected browser is:"+browserRadioText);

  const ageRadio = page.getByLabel('21-40 Years');
  await expect(ageRadio).toBeChecked();
  const ageRadioText =await ageRadio.getAttribute('value');
  console.log("The default selected age range is:"+ageRadioText);
  const ageRadio02 = page.getByLabel('41-60 Years');
  await expect(ageRadio02).not.toBeChecked();
  const ageRadio03 = page.getByLabel('1-20 Years');
  await expect(ageRadio03).not.toBeChecked();

  await page.getByText('Chrome').first().check();
  await expect(page.getByLabel('Chrome').first()).toBeChecked();
  await expect(page.getByLabel('Chrome').first()).toBeEnabled();

  await page.getByText('Bengaluru').last().check();

await page.waitForTimeout(3000);
})



test.only('LeafGround - waits Automation', async ({ page }) => {
  await page.goto('https://leafground.com/waits.xhtml');
  
    const visibleBtn = page.locator("//span[text()='Click']").first();
    await visibleBtn.click();
    const visibleText = page.locator("//span[text()='I am here']");
    await expect(visibleText).toBeVisible();   // Wait for visibility

    const disappearBtn = page.locator("(//span[text()='Click'])[2]");
    await disappearBtn.click();
    const loadingText = page.locator("//span[text()='Loading']");
    await expect(loadingText).toBeHidden();   // Wait until disappears

    const clickableBtn = page.locator("(//span[text()='Click'])[3]");
    await clickableBtn.click();
    const enabledBtn = page.locator("//span[text()='I am ready']");
    await expect(enabledBtn).toBeEnabled();   // Wait until clickable
    await enabledBtn.click();

    const textChangeBtn = page.locator("(//span[text()='Click'])[4]");
    await textChangeBtn.click();
    const textMessage = page.locator("//span[contains(text(),'Wait for Text Change')]");
    await expect(textMessage).toContainText("Did you notice?");

    await expect(visibleText).toBeVisible();
    await expect(enabledBtn).toBeEnabled();
    await expect(textMessage).toContainText("Did you notice?");

})