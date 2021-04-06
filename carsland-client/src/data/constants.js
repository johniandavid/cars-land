var config = require('../config');

const INVOKE_URL = config["api"]["invokeUrl"];
const AUTH_TOKEN = config["api"]["auth_key"];

module.exports = {
    INVOKE_URL,
    AUTH_TOKEN
}