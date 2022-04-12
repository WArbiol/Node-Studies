//io  de input e output
const process = require('process')

//console.log(process.argv) //da os argumetos mandados para o script

//stdout: STandarD OUTput
process.stdout.write('Qual o seu nome? \n')
process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Seu nome é: ${keyboard}`)
    process.exit()
})
