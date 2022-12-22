const apiUrl = "http://localhost:8080"
if (process.env.NODE_ENV === 'production') {
    apiUrl =process.env.BACK_URL
}


module.exports = apiUrl