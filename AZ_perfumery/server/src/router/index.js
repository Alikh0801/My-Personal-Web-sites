const express = require('express');
const productRouter = require('./products.route');
const authRouter = require('./auth.routes');
const router = express.Router();

router.use("/products", productRouter)
router.use("/auth", authRouter)

module.exports = router;