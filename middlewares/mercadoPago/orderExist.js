const MerchantOrder = require('../../models/MerchantOrder')
const {orderExistsResponse} = require("../../config/responses")
async function accountExists(req, res, next) {
    const order = await MerchantOrder.findOne({orderId: req.body.orderId})
    if (order) {
      return  orderExistsResponse(req,res)
    }
    return next()
}

module.exports =  accountExists