const { Pool } = require('pg');

const pool = new Pool({
    user: 'eclkveco',
    host: 'tai.db.elephantsql.com',
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD

})

module.exports = pool;

