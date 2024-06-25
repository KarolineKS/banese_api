const mysql = require('mysql');

const connection  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tugui1006.',
  database: 'db_registro_users',
  port: 3307
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado ao banco de dados 🎲');
  }
});

module.exports = connection;