# JQL Documentation

## Description

JQL is a JavaScript tool designed to be simple and easy to use, offering various functions with readable code, built without external frameworks or technologies.

## Documentation

### How to use it?

It has a very simple syntax. Just initialize a "post" using the following line of code:
```javascript
import * as jql from './Jql/Main.process.js';
```
### How to use its CRUD?

To use it, an example is:
```javascript
import * as jql from './Jql/Main.process.js';
jql.post(`example_([
    name = "jql"
    type = "project"
])`);
```
This code executes a post in the database. For it to work properly, you need a .jData file in the same directory as the JQL folder.

### CRUD

This tool provides:

- Post – Add a DE (Data Entry) to the database.

- Get – Retrieve a DE.

- DBUpdate – Update the entire database.

- Update – Update a DE and specify its type, either adding or removing a field from the DE.

- DERemove – Remove an entire block from the database.

- CheckExistence – Check if a DE exists.

- FilterBy – Filter a field from the database; it returns every line containing the field and value, printing the line to the console.


### Contributions

Creators of JQL: [Enzo/tvbot](https://github.com/tvbot1234)

Current Patch: 1.0.0, released on 17/09/2025

To contribute to JQL, visit the JQL repository: [JQL](https://github.com/tvbot1234/Jql)
