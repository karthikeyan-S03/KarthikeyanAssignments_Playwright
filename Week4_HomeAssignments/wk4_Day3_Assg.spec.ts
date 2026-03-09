import { test, expect } from '@playwright/test';

test('Handle Frames and Nested Frames', async ({ page }) => {

  // Launch URL
  await page.goto('https://leafground.com/frame.xhtml');

  // Switch to first frame using frameLocator
  const firstFrame = page.frameLocator('(//iframe)[1]');

  const clickMe1= firstFrame.locator('#Click');

  await clickMe1.click();

  await expect(clickMe1).toHaveText('Hurray! You Clicked Me.');

  // TO compute total frames
  const totalFrames = await page.locator('iframe').count();
  console.log("Total number of frames: " + totalFrames);

  // Locate outer and inner frames
  const outerFrame = page.frameLocator('(//iframe)[3]');
  const innerFrame = outerFrame.frameLocator('#frame2');

  const clickMe2 = innerFrame.locator('#Click');
  await clickMe2.click();

  await expect(clickMe2).toHaveText('Hurray! You Clicked Me.');

});