var express = require('express');
var router = express.Router();
const { sum, helloWord, getSqlQuery } = require('../model/usertest')

/* GET home page. */
router.get('/', function (req, res, next) {
  getSqlQuery('users', [],
    [
      {
      'email': 'abc@gmail.com'
     }
    ]
  );
  res.render('index', { title: 'HRO' });
});

module.exports = router;
