const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto('https://www.rtreferencephotos.com/birdsofprey/heccea01e')
    await page.waitForSelector('#qs-slideshow-viewholder-2 > div:nth-child(1) > img:nth-child(1)')
    await page.waitForNavigation({waitUntil: 'networkidle2'})
    const image = await page.evaluate( () => {
        const imglink = document.querySelector('#qs-slideshow-viewholder-2 > div:nth-child(1) > img:nth-child(1)').src
        return imglink
    })
    await page.close()

    console.log(image)

    const imagefile = await fetch(image)
    const fileStream = fs.createWriteStream(__dirname + '/image.jpg');
    await new Promise((resolve, reject) => {
        imagefile.body.pipe(fileStream);
        imagefile.body.on("error", reject);
        fileStream.on("finish", resolve);
    });
})()