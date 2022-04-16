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