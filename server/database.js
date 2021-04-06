const constants = require("./constants")
const { Pool } =  require("pg");

const pool = new Pool({
        user: constants.DATABASE_USER,
        password: constants.DATABASE_PASSWORD,
        database: constants.DATABASE_DATABASE,
        host: constants.DATABASE_HOST,
        port: constants.DATABASE_PORT,
});


module.exports = pool;

/**
 ssl: {
                rejectUnauthorized: false
        }
 */