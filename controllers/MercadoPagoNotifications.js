const mercadopago = require("mercadopago");
const MerchantOrder= require('../models/MerchantOrder')
const axios = require("axios")
const apiUrl =  require('../apiUrl')
const Game= require('../models/game')
// const mercardoPagoPaymentAmount = require('../middlewares/mercadoPago/mercadoPagoPaymentAmount')

const notificationController = {
  notification: async (req, res) => {
    let { userId } = req.params;
    let topic = req.query.topic;
    // console.log(topic);
    let payment;
    let merchantOrder;
    if (topic === "payment") {
      const paymentId = req.query.id;

      payment = await mercadopago.payment.findById(paymentId);
      merchantOrder = await mercadopago.merchant_orders.findById(
        payment.body.order.id
      );
      // console.log("---topic-payment-----");
      // console.log(merchantOrder);

      // mercardoPagoPaymentAmount(merchantOrder)
    } else if (topic === "merchant_order") {
      const orderId = req.query.id;
      merchantOrder = await mercadopago.merchant_orders.findById(orderId);
      // mercardoPagoPaymentAmount(merchantOrder)
      // console.log("----topic merchant-order----");
      // console.log(merchantOrder);
    }
    if (merchantOrder) {
      let { body } = merchantOrder;
      let paidAmount = 0;
      body.payments.forEach((element) => {
        if (element.status === "approved") {
          paidAmount += element.transaction_amount;
          if (paidAmount >= element.total_paid_amount) {
            let orderData = {
                gameId: body.items.map( element => element.id),
                orderId: body.id
            }
            axios.post(`${apiUrl}/payment/merchantOrder/${userId}`,orderData)

            
          }
        }
      });
    }
  },
  create: async (req,res)=>{
    let {body} = req
    try {
        let newOrder = await MerchantOrder.create(body)
            res.status(201).json({
                success:true,
                newOrder,
                res: "Order created successfully"
            })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }

  },
  find: async(req,res)=>{
    let {query} = req
    try {
        let order = await MerchantOrder.find({orderId:query.orderId})
            res.status(201).json({
                success:true,
                order,
                res: "Order found successfully"
            })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
  }
};

module.exports = notificationController;
