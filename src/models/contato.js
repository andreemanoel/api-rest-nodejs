const db        = require('../config/database');
const Sequelize = require('sequelize');

const Contato = db.define('contato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
});

module.exports = Contato;
