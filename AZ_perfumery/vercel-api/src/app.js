const express = require("express");
const router = require("./router/products.route");
const app = express();
const cors = require('cors');
require("dotenv").config();
const path = require("path");

const whitelist = [
    process.env.CORS1,
    process.env.CORS2
]

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate));


app.use(express.json());

app.use('/api/uploads', express.static(path.join(__dirname, 'data/productsimg')));

app.use(router);

module.exports = app;