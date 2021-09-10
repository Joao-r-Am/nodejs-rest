// configs para a conexão do banco de dados | como é arquivo de estudo, apos o uso tirar a password
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop-novo'
})

module.exports = conexao;