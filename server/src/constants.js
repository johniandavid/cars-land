var config = require('./config.json')

const SERVER_PORT = config["server"]["port"]
const API_KEY = config["api"]["api_key"]
const DATABASE_USER = config["database"]["user"]
const DATABASE_PASSWORD = config["database"]["password"]
const DATABASE_DATABASE = config["database"]["database"]
const DATABASE_HOST = config["database"]["host"]
const DATABASE_PORT = config["database"]["port"]

const INVOKE_URL = config["api"]["invokeUrl"]

const DEFAULT_LIMIT = 100;

module.exports = {
    SERVER_PORT,
    API_KEY,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_DATABASE,
    DATABASE_HOST,
    DATABASE_PORT,
    INVOKE_URL,
    DEFAULT_LIMIT
}