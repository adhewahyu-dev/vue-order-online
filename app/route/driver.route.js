module.exports = function(app) {
    const drivers = require('../controller/driver.controller.js');

    app.post('/api/driver', drivers.create);

    app.get('/api/drivers', drivers.findAll);

    app.get('/api/driver/:driverId', drivers.findById);
}