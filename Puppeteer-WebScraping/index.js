const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://docs.bsoft.com.br/login/index")
    await page.type("input[name=email]", bsoftUsername);
    await page.type("input[name=senha]", bsoftPassword);
    await page.click("button[type=submit]");
    await page.waitForNavigation({
    waitUntil: "networkidle2",
});
    await page.screenshot({path: "bsoft-login-index.png"})

    await browser.close()
}) (); //(a block)(); -> execution of the block