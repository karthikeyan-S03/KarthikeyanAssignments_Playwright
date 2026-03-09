import { test, expect } from '@playwright/test';

test('Handle frame and confirm alert', async ({ page }) => {

  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // Switch to iframe using frameLocator
  const frame = page.frameLocator('#iframeResult');

  // Event Listener for alert
  page.on('dialog', async (dialog) => {
    
    console.log('Alert message:', dialog.message());
    console.log('Alert type:', dialog.type());
    await dialog.accept();
  });

  // Clicking "Try it" button inside frame
  await frame.locator('button').click();

  const resultText = await frame.locator('#demo').textContent();
  console.log('Result Text:', resultText);

  // Assertion
  await expect(frame.locator('#demo')).toHaveText('You pressed OK!');
  
});