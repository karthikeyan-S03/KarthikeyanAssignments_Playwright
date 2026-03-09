import {test, expect} from '@playwright/test';
import path from 'path';

test ("File upload", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePath = 'Data/KarthikeyanS_Pic.png';

    await page.setInputFiles('#file-upload',filePath);
    await page.click('#file-submit');
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});

test('File Upload using fileChooser', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');
  const filePath = 'Data/KarthikeyanS_Pic.png';

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#file-upload').click()  
  ]);

  await fileChooser.setFiles(filePath);
  await page.click('#file-submit');
  await expect(page.locator('#uploaded-files')).toHaveText('KarthikeyanS_Pic.png');
});

test.only('Downloading a file', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download')
  await page.getByText('Logo.png').click();
  const download = await downloadPromise;
  await download.saveAs('Data/DownloadedFromPortal.png')

})
