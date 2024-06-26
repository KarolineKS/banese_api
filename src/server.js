require('dotenv').config({path: '.env'});

const express = require('express');
const cors = require('cors');

const port = process.env.PORT ;

const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", routes);


server.listen( port, (req, res) => {
  res.json({message: "Api rodando..."});
})

module.exports = server;