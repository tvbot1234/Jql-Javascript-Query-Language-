# JQL documentation

## Description
O JQL é uma ferramenta javascript criada para ser fácil de usar e simples além de ter diversas funções e ter um código fácil de entender, feito sem utilizar frameworks ou tecnologias externas.

## Documentation

### Como usá-lo?

Ele possui uma sintaxe bem simples, basta inicializar um "post" utilizando a seguinte linha de código:
```javascript
import * as jql from './Jql/Main.process.js';
```

### Como utilizar sua CRUD?

Para utilizar ela, um exemplo de uso é: 
```javascript
import * as jql from './Jql/Main.process.js';
jql.post(`example_([
    name = "jql"
    type = "project"
])`);
```
Este código executa um post no banco de dados, para ele funcionar corretamente, você precisa de um arquivo ".jData" no mesmo diretório da pasta do JQL.

### CRUD

Esta ferramenta possui:

- Post para adicionar uma DE(Data Entry) ao banco.

- Get para pegar uma DE.

- DBUpdate para atualizar o banco de dados inteiro.

- Update para atualizar uma DE e pode adicionar o tipo dela, sendo para adicionar ou remover um field da DE.

- DERemove para remover um bloco inteiro do banco de dados.

- CheckExistence para checar a existência de uma DE.

- FilterBy para filtrar um field do banco de dados, ele retorna cada linha que contém o field e o valor, imprimindo a linha no console.

## Contribuições

- Criadores do JQL: [Enzo/tvbot](https://github.com/tvbot1234)

- Patch atual: 1.0.0, lançada em 17/09/2025

- Para contribuir com o JQL, visite o repositório do JQL: [JQL](https://github.com/tvbot1234/JQL)