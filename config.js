const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, MYSQL_USER, MYSQL_PASSWORD,
        MYSQL_DATABASE, MYSQL_HOST} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    mysql: {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        database: MYSQL_DATABASE,
        password: MYSQL_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10
    }
}