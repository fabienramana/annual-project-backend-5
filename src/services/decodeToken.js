const jwt = require('jsonwebtoken');

function decodeToken(req) {
  
  const userDecoded = jwt.decode(req.token);
  return userDecoded;
}

module.exports = decodeToken;
