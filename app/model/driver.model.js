module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('driver', {
        fullname: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        }
    });

    return Driver;
}