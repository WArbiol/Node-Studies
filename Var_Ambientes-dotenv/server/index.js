require('dotenv/config')
console.log(process.env.SECRET_MESSAGE) //process.env is an object inside of node
console.log(`Minha senha super secreta é ${process.env.SUPER_SECRET_TOKEN}`)