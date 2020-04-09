module.exports = function(app) {
    const customers = require('../controller/customer.controller.js');

    // membuat new customer
    app.post('/api/customer', customers.create);

    // memanggil semua customer
    app.get('/api/customers', customers.findAll);

    // memanggil satu customer sesuai id
    app.get('/api/customer/:customerId', customers.findById);

    // menghapus
    app.delete('/api/customer/:customerId', customers.delete);
}