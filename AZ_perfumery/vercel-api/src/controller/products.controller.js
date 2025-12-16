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

module.exports = {
    getCategoryProduct
}