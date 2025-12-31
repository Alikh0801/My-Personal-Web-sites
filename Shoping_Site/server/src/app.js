const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/db");

const app = express();

dbConnect();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost: ",   front host yazilacaq 
//     credentials: true
// }))

module.exports = app;