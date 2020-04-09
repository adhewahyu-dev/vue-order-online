module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Product;
}