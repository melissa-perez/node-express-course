const {products} = require("../data");

const getProducts = (req, res) => {
    res.status(200).json(products)
}

const getProduct = (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
    console.log(product)
    if (product === undefined) res.status(404).json( { message: "That product was not found."})
    res.status(200).json(product)
}

module.exports = {getProducts, getProduct}
