require('dotenv').config();

const connectDB = require('./db/connect.js');
const Product = require('./models/product.js');

const jsonProducts = require('./products.json');
console.log(jsonProducts);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('connected to db');
        await Product.create(jsonProducts);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();