const express = require("express");
const { getCategoryProduct, getDiscountProducts, getBestSellerProducts, createProduct, searchProducts } = require("../controller/products.controller");
const upload = require("../middleware/upload");
const productRouter = express.Router();

productRouter.get("/search", searchProducts);
productRouter.get("/discount", getDiscountProducts);
productRouter.get("/bestsellers", getBestSellerProducts);
productRouter.get("/", getCategoryProduct);
productRouter.post("/", upload.single("image"), createProduct);

module.exports = productRouter;