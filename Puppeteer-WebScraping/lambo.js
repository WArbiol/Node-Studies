const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: fl}) //launch chromium
    const page = await browser.newPage()
    await page.goto("https://www.lamborghini.com/en-en")
    await page.screenshot({path: "lambo1.png"})
    await page.click('button[id="onetrust-accept-btn-handler"]')
    await page.screenshot({path: "lambo2.png"})
    const lamboText = await page.evaluate( () => {
        const text = document.querySelector("div[class='header-slider'] h2")
        return text.innerHTML
    })

    console.log(lamboText)

    await page.screenshot({path: "lambo3.png"})
    await browser.close()
}) ();

// https://www.youtube.com/watch?v=Sag-Hz9jJNg&ab_channel=PedroTech