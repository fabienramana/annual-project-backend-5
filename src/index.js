const config = require('config');
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')

const apiRouter = require('./services/api');
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')

const server = express();

server.use(cors())


server.use(bodyParser.json())

server.use(apiRouter);

server.use(error);
server.use(notFound);


server.listen(config.get('port'), () => {
  console.log(`Example app listening on port ${config.get('port')}!`)
});