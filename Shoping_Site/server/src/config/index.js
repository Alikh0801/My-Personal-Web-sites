const dotenv = require('dotenv').config();

const config = {
    port: process.env.PORT,
    db_url: process.env.DB_URI,
}

module.exports = config;