const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Tugui1006.',
  database: process.env.DB_DATABASE || 'db_registro_users',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados 🎲');
  }
});

module.exports = client;
