let router=require('express').Router()
let {read,create,update,destroy} = require('../controllers/comment')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const schema = require ('../schemas/comment')

router.get('/',read)
router.post('/',validator(schema), create,passport.authenticate("jwt", { session: false }))
router.put('/:id',update,passport.authenticate("jwt", { session: false }))
router.delete('/:id',destroy ,passport.authenticate("jwt", { session: false }))

module.exports = router;