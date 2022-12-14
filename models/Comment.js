const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    comment: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    gameId: { type: mongoose.Types.ObjectId, ref: 'games' },
},
    {
        timestamps: true
    }
)


const Comment = mongoose.model('comments', schema);
module.exports = Comment;