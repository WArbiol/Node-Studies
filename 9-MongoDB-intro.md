# MongoDB
- Banco de dados **orientado a documentos**.
- Banco de dados não relacional - NoSQL (Not Only SQL).
- Armazenamento similar a json's (bson's).
- Não precisam ter uma estrutura préviamente definida.
- Formato do armazenamento: **BSON**.
    - versão binária-encodada do Json.
    - Inclui alguns tipos extras de formatos de dados.
    - Codifica e decodifica em linguagens diferentes.
    - Algo interno, podemos trata-lo como json sem problemas  

| SQL Terms/concept     | MongoDB Terms/concept         |
| --------------------  | ----------------------------- |
|   database            |       database                |
|   table               |       collection              |
|   row                 | document or BSON document     |
|   column              |       field                   |
|   index               |       index                   |
|   table joins         |Reference or embedded documents|

### Porque usar MongoDB:
- Sem esquema fixo
- Alta Performance
- Alta disponibilidade
- Fácil escalabilidade

# Principais comandos:
## Primeiro iniciar o mongo:
```
sudo systemctl start mongod
```
```
mongo
```
## Mostras as bases de dados
```
show dbs
```
## Mudar para uma base de dados
```
use <nome_do_banco_de_dados>
```
## Criar uma collection (equivalente a uma tabela)
```
db.createCollection('<nome_da_collection>')
```
## Mostrar as collections
```
show collections
```

## Inserir na collection
```
db.<nome_da_collection>.insert(<Obeto Json>)
```
#### Ou
```
db.<nome_da_collection>.save(<Obeto Json>)
```
## Mostrar o que há em uma collection
```
db.<nome_da_collection>.find()
```
## Encontrar um insert na collection
```
db.<nome_da_collection>.find(<dentificador do objeto json>)
```
## Atualizar uma parte de um documento ou o documento completo
```
db.<nome_da_collection>.update(<dentificador do objeto json>, <Novo objeto json>)
```
##### Se vazio é o documento completo 
## Deletar
```
db.<nome_da_collection>.deleteOne(<dentificador do objeto json>
```