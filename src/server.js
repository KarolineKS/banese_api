require('dotenv').config({path: '.env'});

const express = require('express');
const cors = require('cors');

const port = process.env.PORT ;

const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", routes);


server.listen( port, () => {
  console.log(`Server is running on port ${port} 🚀`);
})

module.exports = server;