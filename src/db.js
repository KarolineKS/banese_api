const mysql = require('mysql');

const connection  = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado ao banco de dados 🎲');
  }
});

module.exports = connection;