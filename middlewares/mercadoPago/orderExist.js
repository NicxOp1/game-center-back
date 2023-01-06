const MerchantOrder = require('../../models/MerchantOrder')
const {orderExistsResponse} = require("../../config/responses")
const Game = require('../../models/game')


async function findAndUpdate(element,userId){
    let game= await Game.findOneAndUpdate({_id: element}, { $push: { 'buyed': userId }} , {new :true})
    console.log(game);
}


async function orderExists(req, res, next) {
    let {userId} = req.params
    let {orderData} = req.body
    console.log(orderData);
    
    console.log("---------------------");
    console.log("---------------------");


    console.log(orderData);
    console.log("---------------------");
    console.log("---------------------");
    let filter = {
        orderId: await orderData.orderId
    }

    let gameUpdate = {
        gameId: await orderData.gameId
    }
    const order = await MerchantOrder.findOne(filter)
    if (order) {
    //   return  orderExistsResponse(req,res)
    return console.log("orderExist");
    }   
    console.log(gameUpdate)
    await gameUpdate.gameId.forEach(element => {
        findAndUpdate(element,userId)
    });
    next()

}

module.exports =  orderExists