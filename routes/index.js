let router =require('express').Router()
let games = require('./games.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'En expresss' });
});
router.use('/games',games)
module.exports = router;
