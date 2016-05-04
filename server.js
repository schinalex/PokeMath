var express = require('express')
var app = express()
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1000',
  database: 'pokemathdb'
})
var dbRequest = function (query) {
  connection.connect()

  connection.query(query, function (err, rows, fields) {
    if (err) throw err
    console.log(rows)
    return rows
  })

  connection.end()
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/db', function (req, res) {
  res.send(dbRequest('SELECT 1 + 1 AS solution'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

dbRequest('SELECT 1 + 1 AS solution')

// var initDB = function () {
//   CREATE SCHEMA `pokemathdb` ;
//   CREATE TABLE `pokemathdb`.`formulas` (
//     `id` INT NOT NULL,
//     `formulaTypes` VARCHAR(20) NOT NULL,
//     `Formulascol` VARCHAR(45) NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE INDEX `idFormulas_UNIQUE` (`id` ASC),
//     UNIQUE INDEX `formulaTypes_UNIQUE` (`formulaTypes` ASC));
//
// }
