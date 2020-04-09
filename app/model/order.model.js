module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('order', {
        user_id: {
            type: Sequelize.STRING
        },
        driver_id: {
            type: Sequelize.STRING
        },
        order_detail: {
            type: Sequelize.STRING
        }
    });

    return Order;
}