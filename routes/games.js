let router=require('express').Router()


let {read,create} = require('../controllers/game')


router.get('/',read)

router.post('/', create)


module.exports = router;