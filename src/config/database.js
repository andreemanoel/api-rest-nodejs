const Sequelize = require("sequelize");

//Conexão online
// const sequelize = new Sequelize('postgres://regqylsp:39UoA_jxlIxZq0qKdVjQk5FvnByYdSRy@tuffi.db.elephantsql.com/regqylsp',{dialect: 'postgres'});

const sequelize = new Sequelize({
  dialect: 'sqlite', 
  storage: './src/config/db.sqlite'
});
 
module.exports = sequelize;