const puppeteer = require('puppeteer');

(async () =>{

    const browserFetcher = puppeteer.createBrowserFetcher();
    const revisionInfo = await browserFetcher.download("533271");
    //const browser = await puppeteer.launch({
    //    executablePath: revisionInfo.executablePath,
    //    headless: false
    //});
    const browser = await puppeteer.launch({ headless: false})


    const page = await browser.newPage()
    await page.goto("https://shopee.com.br/")
    await page.waitForSelector('div > div > div > div > div')
    await page.click('div > div > div > div > div')
    await page.type("input[class='shopee-searchbar-input__input']", "ssd nvme 512gb")
    await page.click('button[class="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"]')
    await page.waitForSelector("div[class='col-xs-2-4 shopee-search-item-result__item']")
    await page.screenshot({path: "shopee3teste.png"})
    await browser.close()
}) ()
