const products = require("../data/products");
const Product = require("../models/product.model");


const getCategoryProduct = async (req, res) => {
    try {
        const { category } = req.query;

        if (!category) {
            return res.status(400).json({
                ok: false,
                message: "Category is required",
                data: []
            });
        }

        const products = await Product.find({
            category,
            isActive: true
        });

        return res.status(200).json({
            ok: true,
            message: "Products fetched successfully",
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: "Internal server error"
        });
    }
};

const getDiscountProducts = async (req, res) => {
    try {
        const products = await Product.find({
            discount: { $gt: 0 },
            isActive: true
        });

        return res.status(200).json({
            ok: true,
            message: "Discounted products fetched successfully",
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: "Internal server error"
        });
    }
}

const getBestSellerProducts = async (req, res) => {
    try {
        const products = await Product.find({
            bestSeller: true,
            isActive: true
        });

        return res.status(200).json({
            ok: true,
            message: "Best seller products fetched successfully",
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: "Internal server error"
        });
    }
}

const createProduct = async (req, res) => {
    try {
        const { title, category, bestSeller, discount } = req.body;

        const prices = JSON.parse(req.body.prices);

        const imagePath = `/uploads/products/${req.file.filename}`;

        const product = await Product.create({
            title,
            category,
            bestSeller: bestSeller === "true",
            discount: Number(discount),
            prices,
            image: imagePath
        });

        res.status(201).json({
            ok: true,
            message: "Product created successfully",
            data: product
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            message: error.message
        });
    }
};

const searchProducts = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q || q.trim().length < 2) {
            return res.status(200).json({
                ok: true,
                data: []
            });
        }

        const products = await Product.find({
            title: { $regex: q, $options: "i" },
            isActive: true
        }).limit(6);

        return res.status(200).json({
            ok: true,
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: "Internal server error"
        });
    }
};




module.exports = {
    getCategoryProduct,
    getDiscountProducts,
    getBestSellerProducts,
    createProduct,
    searchProducts
}