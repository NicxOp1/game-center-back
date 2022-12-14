let router =require('express').Router()
let games = require('./games.js')
let users = require('./users.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'En expresss' });
});
router.use('/auth',users)
router.use('/games',games)
module.exports = router;
