module.exports = function(app) {
    const products = require('../controller/product.controller.js');

    app.post('/api/product', products.create);

    app.get('/api/product', products.findAll);

    app.get('/api/product/:productId', products.findById);
}