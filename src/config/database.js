const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://regqylsp:39UoA_jxlIxZq0qKdVjQk5FvnByYdSRy@tuffi.db.elephantsql.com/regqylsp',{dialect: 'postgres'});
 
module.exports = sequelize;