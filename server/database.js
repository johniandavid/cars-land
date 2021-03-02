const Pool =  require("pg").Pool;

const pool = new Pool({
        user: "postgres",
        password: "",
        database: "cars_land",
        host: "localhost",
        port: "5432"
    });

module.exports = pool;