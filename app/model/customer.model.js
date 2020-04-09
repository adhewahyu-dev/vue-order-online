module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        fullname: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phonenumber: {
            type: Sequelize.STRING
        }
    });

    return Customer;
}