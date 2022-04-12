const fs = require('fs') //File System

//cria ou sobrescreve no arquivo
fs.writeFile('test.txt', 'Conteúdo do arquivo', err => console.log(err)) 

//adiciona ao arquivo já criado
fs.appendFile("test.txt", "\nConteúdo adiciona posteriormente", err => console.log(err))

//renomear arquivo:
fs.rename("test.txt", "newFileName.txt", err => console.log(err))

/*Remover/deletar arquivo arquivo:
fs.unlink("newFileName.txt", err => console.log(err)) */


/* 
   VARIAVEL DE AMBIENTE -> VARIAVEL QUE SEMPRE CONSEGUE ACESSAR
   UMA DELAS: __dirname
   __dirname -> caminho para o diretório que estamos
*/

console.log(__dirname)
//obs.: fs é assíncrono -> o console.log será o primeiro a ser concluído
