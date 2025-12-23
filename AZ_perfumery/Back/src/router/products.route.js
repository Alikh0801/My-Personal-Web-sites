const express = require("express");
const { getCategoryProduct, getDiscountProducts, getBestSellerProducts } = require("../controller/products.controller");
const router = express.Router();

router.get("/api/products/", getCategoryProduct);
router.get("/api/products/discount", getDiscountProducts);
router.get("/api/products/bestsellers", getBestSellerProducts)

module.exports = router