var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var contents = fs.readFileSync('data/cluster.json', 'utf8');
  console.log(contents);
  res.render('index', { title: '' });
});

module.exports = router;
