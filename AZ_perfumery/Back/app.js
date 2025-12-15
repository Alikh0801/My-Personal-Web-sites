const express = require("express");
const router = require("./src/router/products.route");
const app = express();
const cors = require('cors');
require("dotenv").config();
const path = require("path");
app.use(cors());
app.use(express.json());

app.use('/api/uploads', express.static(path.join(__dirname, 'src/data/productsimg')));

app.use(router);

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
