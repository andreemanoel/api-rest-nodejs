const db = require('../config/database');
require('./usuario');

const load =  async () => {
    
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Error ->  Load connection:', error);
    }

    try {
        await db.sync();
    } catch (error) {
        console.log("Error ->  Load models");
        console.log(error.message);
    }

}

module.exports = load;

