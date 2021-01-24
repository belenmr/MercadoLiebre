const productsDB = require('../data/productsDB');

module.exports = {
    index: (req, res) => {
        const toThousand = n => n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g, "." ) ;
        const calculateDiscount = (discount, price) => {
            return price - (discount * price / 100);
        }

        let inSale = productsDB.filter(product => product.category == "in-sale");
        let visited = productsDB.filter(product => product.category == "visited");

        res.render('index', {
            title: "Mercado Liebre Argentina",
            productsInSale: inSale,
            visitedProducts: visited,
            calculateDiscount,
            toThousand
        });
    }
}