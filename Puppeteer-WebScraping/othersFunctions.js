/* What is fecth / fecther */
    /*
        Fetch is to go (or come after) and bring, or take back
    */

/* puppeteer.createBrowserFetcher() */ //linha 21
    /*
        It creates an fetcher that goes after an version of chrome or firefox.
        https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#class-browserfetcher
    */

/* browserFetcher.download("972766") */
    /*
        Initiates a GET request to download the revision from the host
        Downloads the chrome
    */

/* page.evaluateHandle */ //linha 139
    /*
        First of all: ElementHandle
        An ElementHandle represents an in-page DOM element  
        The method:
            const elementHandle = await page.$(css selector)  //return a promisse of an ElementHandle
            const elementHandles= await page.$$(css selector) //return a promisse of an array of ElementHandles
        We can search from an elementHandle as well:
            const hrefElement = await elementHandle.$(css selector)  //return a promisse of an ElementHandle
            const hrefElements= await elementHandle.$$(css selector) //return a promisse of an array of ElementHandles

        For second: page.evaluate(function)
            It returns a value of function that worked inside the page in other words we can query elements of the page using DOM:
                document.querySelector(...)
            But we cannot return an ObjectHandle,  we should return a standard value of javaScript (as I understood)

        At last: page.evaluateHandle(function):
            Itś basic the same of the page.evaluate but it returns a Elementhandle
    */


/* const resp = fetch(`${url}${queryParam}`, { //line 139
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => res.json());
*/
    /*
          
    */

/* response.jsonValue() */ //linha 152
    /*
          
    */

/* const agenda = new FormData(); */ //linha 293
    /*
          
    */

/* agendamento.append("documentos_pesquisar[]", "nfe"); */ //linha 294
    /*
          
    */

/* $.ajax({ type: "POST",...  */ //liha 302 , 465 ans 495 as well
    /*
          
    */

/* .done(resolve) | .fail(reject) */ //linha 309
    /*
          
    */

/* difference of .outerText .innerText and similars */ //linha 349
    /*
          
    */

/* review of .concat (for lists, multidimensional arrays, etc) */ //lina 480
    /*
          
    */

/* path.basename */ //line 575
    /*
          
    */

/* storage.bucket("floki-certificates").file(file.name).download({ destination: fileDest }); */ //line 597-600
    /*
          
    */