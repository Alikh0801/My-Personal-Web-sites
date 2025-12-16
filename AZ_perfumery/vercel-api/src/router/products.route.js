const express = require("express");
const { getCategoryProduct } = require("../controller/products.controller");
const router = express.Router();

router.get("/api/products/", getCategoryProduct);

module.exports = router