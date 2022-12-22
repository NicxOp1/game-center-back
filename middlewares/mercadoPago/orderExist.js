const MerchantOrder = require('../../models/MerchantOrder')
const {orderExistsResponse} = require("../../config/responses")
const Game = require('../../models/game')


async function findAndUpdate(element,userId){
    let game= await Game.findOneAndUpdate({_id: element}, { $push: { 'buyed': userId }} , {new :true})
    console.log(game);
}


async function accountExists(req, res, next) {
    let {userId} = req.params
    const order = await MerchantOrder.findOne({orderId: req.body.orderId})
    if (order) {
    //   return  orderExistsResponse(req,res)
    return console.log("orderExist");
    }   
    // 
    await req.body.gameId.forEach(element => {
        findAndUpdate(element,userId)
    });
    return next()
}

module.exports =  accountExists