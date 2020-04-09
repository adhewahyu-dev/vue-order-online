module.exports = function(app) {
    const orders = require('../controller/order.controller.js');

    app.post('/api/order', orders.create);

    app.get('/api/orders', orders.findAll);

    app.get('/api/order/:orderId', orders.findById);
}