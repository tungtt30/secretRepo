const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.pxtpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log('DB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB