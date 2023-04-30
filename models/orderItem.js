const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

const OrderItem = sequelize.define('orderItems', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Sequelize.INTEGER,
    price: Sequelize.DOUBLE
});

module.exports = OrderItem;