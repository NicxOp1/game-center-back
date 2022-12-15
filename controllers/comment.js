const Comment = require('../models/Comment')
const User = require ('../models/User')

const controller = {

    create: async (req, res) => {
		let id = req.body.userId;
		let { comment, userId, gameId, date} = req.body;

		try {
			let user = await User.findOne({ _id: id });
			userId = user._id;
			let comments = await (
				await Comment.create({ comment, userId, gameId,date})
			).populate("userId", {
				name: 1,
			});
			res.status(201).json({
				response: comments,
				success: true,
				message: "The comment was successfully created",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				message: error.message,
			});
		}
	},
	read: async (req, res) => {
		let comments;
        
        let query = {};
        if (req.query.date) {
            date = { date: req.query.date }
        }
		
        try {
			comments = await Comment.find(query)
				.sort({ date: -1 })
				.populate("userId", {
					photo: 1,
					name: 1,
				});
			res.json({ success: true, response: comments });
		} catch (error) {
			console.log(error);
			res.status(500).json();
		}
	},
    update: async (req, res) => {
        let update = req.body
        let { id } = req.params


        try {
            let commentUpdate = await Comment.findByIdAndUpdate(id, update, { new: true })
            if (commentUpdate) {

                res.status(200).json({
                    response: commentUpdate,
                    success: true,
                    message: "Your comment was updated!"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: error.message
                })
            }

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params

        try {
            let deleteComment = await Comment.findByIdAndDelete({ _id: id })
            if (deleteComment) {
                res.status(200).json({
                    success: true,
                    message: "Your comment was deleted!",

                })

            } else {
                res.status(404).json({
                    success: false,
                    message: "Your comment could not deleted!"
                })

            }
        } catch (error) {
            res.status(400).json({
                success: false,
                response: error.response
            })
        }
    }
}

module.exports = controller;