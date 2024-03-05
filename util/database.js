const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', '53625362TsarVano', {
    dialect: 'mysql',
    host: 'localhost', 
});

module.exports = sequelize;