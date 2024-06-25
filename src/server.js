require('dotenv').config({path: '.env'});

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", routes);


server.listen(8001 , () => {
  console.log(`Server is running on port ${8001}`);
})

module.exports = server;