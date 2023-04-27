const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_app', 'root', 'WebApiTest123', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
})
module.exports = sequelize;