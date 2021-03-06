/* What is fecth / fecther */
    /*
        Fetch is to go (or come after) and bring, or take back

        ```
            npm install node-fetch
            const fetch = require("node-fetch")
        ```
        Common Usages:  
            const response = await fetch('https://github.com/');

        Plain text or HTML
            const body = await response.text();
        JSON
            const data = await response.json();
        
        https://www.npmjs.com/package/node-fetch
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


/* const resp = fetch(`${url}${queryParam}`, { // GET 
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
    elementHandle.jsonValue()
          Returns a JSON representation of the object. The JSON is generated by running 
          JSON.stringify on the object in page and consequent JSON.parse in puppeteer.

    */

/* const agenda = new FormData(); */ //linha 293
    /*
          FormData() construtor cria um novo objeto FormData.
          Exemplo:
            var formData = new FormData(); // Currently empty
            formData.append('username', 'Chris');

        Criando com parametro:
            var myForm = document.getElementById('myForm');
            formData = new FormData(myForm);

    */

/* agendamento.append("documentos_pesquisar[]", "nfe"); */ //linha 294
    /*
          Um uso de um FormData
    */

/* $.ajax({ type: "POST",...  */ //liha 302 , 465 ans 495 as well
    /*
          
    */

// O que ée XML
// O que é AJAX
// fetch com POST e GET
// JQuery tutorial //  
// $.ajax( { ... } ) //com POST e GET

/* .done(resolve) | .fail(reject) */ //linha 309
    /*
          
    */

/* difference of .outerText .innerText and similars */ //linha 349
    /*
        innerText: what's between the tags of the element.
        outerText: content of the element, including the tags.
        innerHTML outerHTML same thing, but treats like HTML
    */

/* review of .concat (for lists, multidimensional arrays, etc) */ //lina 480
    /*
        var num1 = [1, 2, 3];
        var num2 = [4, 5, 6];
        var num3 = [7, 8, 9];
        // All nums:
        var nums = num1.concat(num2, num3);
    */

/* path.basename */ //line 575
    /*
        Extract the filename from a file path.
            var filename = path.basename('/Users/Refsnes/demo_path.js');
        filename será demo_path.js
    */

/* storage.bucket("floki-certificates").file(file.name).download({ destination: fileDest }); */ //line 597-600
    /*
          
    */