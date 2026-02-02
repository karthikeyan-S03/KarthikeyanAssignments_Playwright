import {test, chromium, webkit} from '@playwright/test';


test('launching Edge Browser', async()=> {
    const edgeBrowser= await chromium.launch({channel:'msedge',headless:false});
    const edgeContext=await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    
    await edgePage.goto('https://www.redbus.in')

    const redBusTitle = await edgePage.title();
    const redBusURL = edgePage.url();

    console.log("Red Bus Title:", redBusTitle);
    console.log("Red Bus URL:", redBusURL);

    await edgePage.waitForTimeout(5000)

    // -------- Flipkart in WebKit Browser --------
    const webkitBrowser = await webkit.launch({headless: false});
    const webkitContext = await webkitBrowser.newContext();
    const webkitPage = await webkitContext.newPage();

    await webkitPage.goto('https://www.flipkart.com');

    const flipkartTitle = await webkitPage.title();
    const flipkartURL = webkitPage.url();

    console.log("Flipkart Title:", flipkartTitle);
    console.log("Flipkart URL:", flipkartURL);

    await edgeBrowser.close();
    await webkitBrowser.close();


});

    

