const db        = require('../config/database');
const Sequelize = require('sequelize');
const Contato = require('./contato');

const Funcionario = db.define('funcionario', {
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
    data_nascimento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
});

Funcionario.belongsTo(Contato, {
  constraints: true,
  foreignKey: 'contato_id'
});

module.exports = Funcionario;
