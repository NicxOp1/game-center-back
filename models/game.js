const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required:true},
    photo: [{type: String, required: true}],
    price: {type: Number, required: true},
    date: {type: Date, required: true},
    buyed: [{type: mongoose.Types.ObjectId,ref:'users', required: true}],
    rate: {type: Number, required:true}
})

const Game = mongoose.model('games',schema)


module.exports = Game