const ProductService = require('../services/product');

const get = async (req, res) => {
    try {
        const product = await ProductService().getProduct(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(error.status).send(error.message)
    }
};

const query = async (req, res) => {
    try {
        const product = await ProductService().searchProduct(req.query.q);

        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Items not found');
        }
    } catch (error) {
        res.status(error.status).send(error.message)
    }
};

module.exports = { get, query };