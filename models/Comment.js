const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date: { type: Date, required: true },
    comment: { type: String, required: true, required: true }, 
    userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true},  
    gameId: {type: mongoose.Types.ObjectId,ref: 'games'},  
})


const Comment = mongoose.model('comments', schema);
module.exports = Comment;