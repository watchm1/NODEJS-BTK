const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');
const Category = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

module.exports = Category;