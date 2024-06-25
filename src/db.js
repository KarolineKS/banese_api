const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Tugui1006.',
  database: process.env.DB_DATABASE || 'db_registro_users',
  port: process.env.DB_PORT || '3307',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado ao banco de dados 🎲');
  }
});

module.exports = connection;
