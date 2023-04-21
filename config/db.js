const Pool = require('pg').Pool;

const pool = New Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: '1234',
  port: 5432,
})
