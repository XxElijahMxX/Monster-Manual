const Sequelize = require('sequelize');
const db  = require('../config/connection');

const Monsters = db.define('monsters', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
})
module.exports = Monsters