# Express
- Basicamente: um conjunto de ferramentas agregadas para lidar com as entradas e saídas de dados.
- Framework minimalista: preza ser o menor possível para entregar somente o essêncial.
    - Não se preocupa com padrão de desênvolvimento (não nos obriga a usar uma determinada arquitetura de código)
- Opera através de middlewares. 
    - Middleware é uma função que trata as resquesições e as respostas passam os serviços e recursos para outro middleware ou para o site.
- Segue um padrão chamado de Chain of Responsibility.
    - Basicamente um conjunto de middlewares (de pequenas funções) que vão passando e filtrando as respostas e transformando ela no que é necessário.
- O express se preocupa em apenas entregar a requisição e a resposta, deixando todo o fluxo de dados à escolha do desenvolvedor.