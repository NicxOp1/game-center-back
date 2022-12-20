let router=require('express').Router()
let {read,create,update, destroy,readDetails} = require('../controllers/game')
const passport = require ('../config/passport')
const schema = require ('../schemas/game')
const validator = require('../middlewares/validator')

router.get('/',read)
router.get('/:id',readDetails)
router.post('/',validator(schema), create,passport.authenticate("jwt", { session: false }))
router.put('/:id',update,passport.authenticate("jwt", { session: false }))
router.delete('/:id',destroy,passport.authenticate("jwt", { session: false }))

module.exports = router;