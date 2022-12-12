let router=require('express').Router()


let {read} = require('../controllers/game')


router.get('/',read)


module.exports = router;