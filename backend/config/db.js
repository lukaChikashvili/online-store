const mongoose = require('mongoose')

 const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to db');

    } catch (error) {

         console.log(`error: ${error.message}`)
         process.exit(1)
    }
}

module.exports = connectDB;