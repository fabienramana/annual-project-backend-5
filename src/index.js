const config = require('config');
const bodyParser = require('body-parser')
const express = require('express');
const apiRouter = require('./services/api');

const server = express();
server.use(bodyParser.json())

server.use(apiRouter);

server.listen(config.get('port'), () => {
  console.log(`Example app listening on port ${config.get('port')}!`)
});