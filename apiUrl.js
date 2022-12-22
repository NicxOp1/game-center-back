const apiUrl = "https://game-center.onrender.com/"
if (process.env.NODE_ENV === 'production') {
    apiUrl =process.env.BACK_URL
}


module.exports = apiUrl