const Game = require('../models/game')

const controller = {
    read: async (req,res) => {
        try {
            
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }
}




module.exports = controller