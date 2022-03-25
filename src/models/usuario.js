const db        = require('../config/database');
const Sequelize = require('sequelize');

const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
});

module.exports = Usuario;
