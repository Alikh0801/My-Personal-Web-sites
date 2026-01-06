const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ["men", "women", "unisex"],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    prices: {
        type: Map,
        of: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
