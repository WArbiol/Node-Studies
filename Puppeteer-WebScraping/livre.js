const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false}) //launch chromium
    const page = await browser.newPage()
    await page.goto("https://www.mercadolivre.com.br/")
    await page.type("input[class=nav-search-input]", "ssd nvme 512");
    await page.click("button[class=nav-search-btn]");

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

    page.waitForNavigation({waitUntil: 'networkidle2'})
    await page.screenshot({path: "ssd.png"})
    let ols = []
    const myPromise = page.evaluate( () => {
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
        const section = document.querySelector("section[class='ui-search-results ui-search-results--without-disclaimer']")
        console.log(section.innerHTML)
        ols = section.querySelectorAll("ol[class='ui-search-layout ui-search-layout--grid']")
        ols.forEach(ol => {
            const lis = ol.querySelectorAll("li")
            lis.forEach(li => {
                let name = li.querySelector("h2[class='ui-search-item__title ui-search-item__group__element']")
                try{
                    var price = li.querySelector("span[class='price-tag-text-sr-only']")
                }catch{
                    var price = li.querySelector("span[class='price-tag-fraction']")
                }
                console.log(name, price)
            })
        })
    })

    myPromise.then(console.log("Ok")).catch("Not ok")




    await page.screenshot({path: "ssd.png"})
    await browser.close()
}) ();

// https://www.youtube.com/watch?v=Sag-Hz9jJNg&ab_channel=PedroTech