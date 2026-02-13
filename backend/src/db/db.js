const mongoose = require("mongoose");
require('dotenv').config();
const URI = process.env.MONGODB_URI;

async function connectDB() {
    await mongoose.connect(URI);

    console.log("DB Connected");
}

module.exports = connectDB;