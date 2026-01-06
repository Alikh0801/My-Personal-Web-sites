const express = require("express");
const { getCategoryProduct, getDiscountProducts, getBestSellerProducts, createProduct } = require("../controller/products.controller");
const upload = require("../middleware/upload");
const productRouter = express.Router();

productRouter.get("/", getCategoryProduct);
productRouter.post("/", upload.single("image"), createProduct)
productRouter.get("/discount", getDiscountProducts);
productRouter.get("/bestsellers", getBestSellerProducts)

module.exports = productRouter;