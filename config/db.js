const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'tRlfro1oqatrlq-jopR$',
    database: process.env.DB_NAME || 'awscalcu'
});

module.exports = db;
