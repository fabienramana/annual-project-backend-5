const config = require('config');
const express = require('express');
const apiRouter = require('./services/api');

const server = express();

server.use(apiRouter);

server.listen(config.get('port'), () => {
  console.log(`Example app listening on port ${config.get('port')}!`)
});