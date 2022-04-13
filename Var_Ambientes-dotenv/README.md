Sempre que usamos **senhas tokens, strings** específicas  
- Sempre é uma boa idéia usar uma variavel de ambiente.
- Podemos usar e reusa-la em vários códigos.
- E ainda teremos mais segurança
    
-> Uso da biblioteca **dotenv**

```
npm install dotenv --save-dev 
```

Colocamos as variáveis no arquivo .env 
Acessamos com o objeto node "process.env.<NOME_DA_VARIAVEL>"

Quando definirmos a variavel no .env não precisamos (e não devemos) usar notações (VARIAVEL_STRING = To te declarando variavel)

Para ter acesso à variavel devemos requerir: `require('dotenv/config')`

ADICIONAR AO **.gitignore** o .env ou *.env