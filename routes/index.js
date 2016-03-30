var express = require('express');
var router = express.Router();
var Braintree = require('../handlers/Braintree');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/braintree',Braintree.process);
router.post('/checkout',Braintree.checkout);
module.exports = router;
