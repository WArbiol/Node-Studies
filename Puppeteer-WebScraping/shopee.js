const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true}) //launch chromium
    const page = await browser.newPage()
    await page.goto("https://shopee.com.br/")
    await page.screenshot({path: "./shopeeimg/shopee1.png"})

    await page.waitForSelector('div > div > div > div > div')
    //page.waitForXPath('/div/div/div/div/div')
    await page.click('div > div > div > div > div')
    await page.screenshot({path: "./shopeeimg/shopee2.png"})

    await page.type("input[class='shopee-searchbar-input__input']", "ssd nvme 512gb")
    await page.click('button[class="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"]')
    await page.screenshot({path: "./shopeeimg/shopee3.png"})

    await page.waitForSelector("div[class='col-xs-2-4 shopee-search-item-result__item']")
    await page.screenshot({path: "./shopeeimg/shopee4.png"})

    const allItens = await page.evaluate( () => {
        const itens = document.querySelectorAll("div[class='col-xs-2-4 shopee-search-item-result__item']")
        let itensList = []
        itens.forEach(item => {
            try{
                let name = item.querySelector("div[class='_10Wbs- _2STCsK _3IqNCf']")
                let minPrice = item.querySelector("span[class='_3c5u7X']")
                itensList.push([name.innerHTML, minPrice.innerHTML])
            }catch(err){
                console.log(err)
            }
        })
        return itensList
    })

    let textfile = ''
    allItens.map(item => {
        textfile += `${item[0]}\nPreço Mínimo: ${item[1]} \n\n`
        console.log(textfile)
    })
    fs.writeFile('Shopee.txt', textfile, err => console.log(err))
    console.log(textfile)

    await page.screenshot({path: "./shopeeimg/shopee5.png"})
    await browser.close()
}) ();

// https://www.youtube.com/watch?v=Sag-Hz9jJNg&ab_channel=PedroTech