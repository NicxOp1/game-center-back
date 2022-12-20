const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date: {type: Date, required: true},
    comment: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    gameId: { type: mongoose.Types.ObjectId, ref: 'games' },
},
)


const Comment = mongoose.model('comments', schema);
module.exports = Comment;