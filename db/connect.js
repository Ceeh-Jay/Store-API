
const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url)
}
//const connectionString = 'mongodb+srv://joseph:<password>@cluster0.uhfbap1.mongodb.net/test'

module.exports = connectDB;