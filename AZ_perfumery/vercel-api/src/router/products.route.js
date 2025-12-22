const express = require("express");
const { getCategoryProduct, getDiscountProducts } = require("../controller/products.controller");
const router = express.Router();

router.get("/api/products/", getCategoryProduct);
router.get("/api/products/discount", getDiscountProducts)

module.exports = router