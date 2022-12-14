let router=require('express').Router()


let {read,create,update, destroy} = require('../controllers/game')


router.get('/',read)
router.post('/', create)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router;