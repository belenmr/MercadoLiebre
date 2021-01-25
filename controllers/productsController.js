const productsDB = require('../data/productsDB');

module.exports = {
    detail: (req, res) => {
        let product = productsDB.find(product => 
            product.id === Number(req.params.id) && product.category === req.params.category);

        res.send(product);
    }
}