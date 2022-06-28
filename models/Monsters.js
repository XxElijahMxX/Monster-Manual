const Sequelize = require('sequelize');
const db  = require('../config/connection');

const Monsters = db.define('monsters', {
    name: {
        type: Sequelize.STRING
    },
    descriptiom: {
        type: Sequelize.STRING
    }
})
module.exports = Monsters