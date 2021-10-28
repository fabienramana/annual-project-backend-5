const jwt = require('jsonwebtoken');

function decodeToken(req) {
  
  const userDecoded = jwt.decode(req.token);
  console.log(req.token)
  return userDecoded;
}

module.exports = decodeToken;
