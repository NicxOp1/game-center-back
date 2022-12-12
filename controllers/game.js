const Game = require('../models/game')

const controller = {
    read: async (req,res) => {
        let query = {}
        let order = {}
        if (req.query.name) {
            query = {...query,
                name : { $regex :req.query.name, $options:'i'}
            }
        }
        if (req.query.rate) {
            order = {
                rate : req.query.rate
            }
        }
        if (req.query.price) {
            order = {
                price : req.query.price
            }
        }
        if (req.query.category) {
            query = { ...query,
                category : {$regex :req.query.category, $options:'i'}
            }
        }

        try {
            let games = await Game.find(query).sort(order)
            if (games) {
                res.status(200).json({
                    res: games,
                    success: true,
                    message: `${games.length} games found`
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }
}




module.exports = controller