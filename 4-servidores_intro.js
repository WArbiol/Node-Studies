const http = require('http')

const server = http.createServer((req, res) => { //request e response
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 404
    res.end('<h1>Hello World</h1>')
}) 

server.listen(3000, () => { //qualquer coisa que estiver na porta 3000 vai cair pra esse servidor
    console.log('Servidor Ativo!')
})