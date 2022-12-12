const Game = require('../models/game')

const controller = {
    read: async (req,res) => {
        try {
            let games = await Game.find()
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