const { Router } =  require('express');

const router = new Router();

router.get('/ping', (req, res) => {
    res.send({
      ping: 'pong',
    });
  });

router.get('/hello', (req, res) => {
    res.send({
        message:'Hello World!'
    });
});
  
  module.exports = router;