let router =require('express').Router()
let games = require('./games.js')
let users = require('./users.js')
let comments = require ('./comments')
let payment = require('./paymentsRoutes')

router.use('/auth',users)
router.use('/games',games)
router.use('/comments',comments)
router.use('/payment',payment)

module.exports = router;
