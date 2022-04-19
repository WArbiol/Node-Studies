# Relacionamento de dados
- Dados precisam estar lincados uns com os outros (lembre do join do SQL)

## Três tipos de associação:
- one-to-one
- one-to-many
- many-many

## Documentos embutidos
- Colocamos documentos dentro de outros
    - Exemplo: Um json de uma nave e na area de tripulantes embutimos um json para cada tripulante
- Grande problema: 
    -
    - Caso queiramos modificar o nome de um tripuulante teriamos que atualizar todas as naves que aquele tripulante participou
    - E quanto maior fosse o documento maislento seria a leitura e escrita desse documento
## Referência
- O documento se referencia a outros documentos em outras collections através do seu ID  

## **Comandos**
## Criar um documento relacionandoo já com o id de uma outra collection
```
db.<collection_name1>.insert(...normalmente com o campo do Id = checklistId: ObjectId("625eeb74e0df62f940091c56"))
```
## Aggregate
```
db.<collection_name2>.aggregate({$lookup: {from: "<collection_name1>", localField: "_id", foreignField: "checklistId", as: "task"}}).pretty()
```
#### $lookup: encontrar e trazer os documentos associados quem os ids associados
#### localField: "local key"
#### foreignField: "foreign key"
#### pretty: "Para deicar mais bonito"

# Operadores
- ## $and
    Se utiliza com lista $and: [ `<dentificador1> , <dentificador2> , <dentificador3> , ... `] 
    ```
    db.task.find({ $and : [ {name: "Preparar o café"}, {done : false} ] })
    ```
- ## $or
    Se utiliza com lista $or: [ `<dentificador1> , <dentificador2> , <dentificador3> , ... `] 
    ```
    db.task.find({ $or : [ {name: "Preparar o café"}, {done : true}]})
    ```
- ## $exists
    Se existe o campo: `<campo>: { $exists: true } `
    ```
    db.task.find({checklistId : { $exists: true }})
    ```