const Pool = require('pg').Pool
const pool = new Pool({
  user: 'galv',
  host: 'localhost',
  database: 'api',
  password: 'dumb',
  port: 5432,
})

module.exports = pool