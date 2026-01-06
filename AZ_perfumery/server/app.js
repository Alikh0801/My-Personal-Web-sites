const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const config = require("./src/config");
const dbConnect = require("./src/config/db");
const router = require("./src/router");
dbConnect();

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
app.use(
    "/uploads",
    express.static(path.join(__dirname, "src/uploads"))
);
app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use("/api", router);

app.listen(config.port, () => {
    console.log(`Server is running`);
});
