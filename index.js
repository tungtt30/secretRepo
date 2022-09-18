const express = require('express')
const app = express()
const connectDB = require('./src/config/databaseConfig')
const mp3apiRouter = require('./src/route/mp3api')
require('dotenv').config()
const PORT = process.env.PORT || 5000

connectDB()

// app.use('/api/song', mp3apiRouter)
app.get('/', mp3apiRouter)
app.get('/api/music', mp3apiRouter)
app.listen(PORT, () => {
    console.log('server is running')
})

module.exports = app