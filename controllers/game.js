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
    },readDetails: async(req,res)=>{
        let {id}=req.params
        try {
            let gamesDetails = await Game.findOne({_id:id})
            if (gamesDetails) {
                res.status(200).json({
                    game: gamesDetails,
                    success: true,
                    message: 'Game id found'
                })
            }else{
                res.status(400).json({
                    success:false,
                    message:"Game id didn't found"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message :error.message
            })
        }
        
    },
    create:async (req,res)=>{
        try {
            let newGame = await Game.create(req.body)
                res.status(201).json({
                    success:true,
                    newGame,
                    res: "Game created successfully"
                })
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    update:async(req,res)=>{
        let {id} = req.params
        try {
            const game = await Game.findOneAndUpdate({_id:id},req.body, {new: true})

            res.status(200).json({
                success:true,
                game,
                res: "Game edited successfully"
            })

        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req,res)=>{
        let {id} = req.params
        try {
            const game = await Game.findOneAndRemove({_id:id})

            res.status(200).json({
                success:true,
                game: game.name,
                res: "Game destroyed successfully"
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }
}




module.exports = controller