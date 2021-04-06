var config = require('./config.json')

const DB_ENVIRONMENT = process.env.DB_ENVIRONMENT || "development"
const SERVER_PORT = process.env.PORT || config["server"]["port"]
const API_KEY = config["api"]["api_key"]
const DEFAULT_LIMIT = 100;

const DATABASE_USER = config["database"][DB_ENVIRONMENT]["user"]
const DATABASE_PASSWORD = config["database"][DB_ENVIRONMENT]["password"]
const DATABASE_DATABASE = config["database"][DB_ENVIRONMENT]["database"]
const DATABASE_HOST = config["database"][DB_ENVIRONMENT]["host"]
const DATABASE_PORT = config["database"][DB_ENVIRONMENT]["port"]

module.exports = {
    SERVER_PORT,
    API_KEY,
    DEFAULT_LIMIT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_DATABASE,
    DATABASE_HOST,
    DATABASE_PORT
}