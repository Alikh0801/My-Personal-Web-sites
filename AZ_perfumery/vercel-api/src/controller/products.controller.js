const products = require("../data/products")


const getCategoryProduct = (req, res) => {
    const { category } = req.query;

    if (!category) {
        return res.status(400).json({
            ok: false,
            message: "Category is required",
            data: []
        });
    }

    const filtered = products.filter(
        p => p.category === category
    );

    console.log(filtered);

    return res.status(200).json({
        ok: true,
        message: "Products fetched successfully",
        data: filtered
    });
};

const getDiscountProducts = (req, res) => {
    const discountedProducts = products.filter(product => product.discount > 0);

    return res.status(200).json({
        ok: true,
        message: "Discounted products fetched successfully",
        count: discountedProducts.length,
        data: discountedProducts
    })
}

module.exports = {
    getCategoryProduct,
    getDiscountProducts
}