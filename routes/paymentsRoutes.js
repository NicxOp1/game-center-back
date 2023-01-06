const router = require("express").Router();
const PaymentMercadoPago=require('../controllers/PaymentMercadoPago')
const PaymentService=require('../services/PaymentService')
const orderAlredyExist = require('../middlewares/mercadoPago/orderExist')
const {notification,create,find} = require('../controllers/MercadoPagoNotifications')
const PaymentInstance= new PaymentMercadoPago(new PaymentService())

router.post("/", function (req, res, next) {

    PaymentInstance.getPaymentLink(req, res);
});
router.post('/notification/:userId',notification,orderAlredyExist,create)
// router.post('/merchantOrder/:userId',)
router.get('/order',find)

module.exports = router;
