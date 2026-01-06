const mongoose = require('mongoose');
const { db } = require('.');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(db)
        console.log('DB connect successfully');
    } catch (error) {
        console.log('DB connect failed!!!', error);
    }
}
module.exports = dbConnect;