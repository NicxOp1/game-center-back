const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    orderId: {type: Number, required: true},
    gameId: {type: mongoose.Types.ObjectId,ref:'games', required: true},
})

const MerchantOrder = mongoose.model('merchantOrders',schema)


module.exports = MerchantOrder