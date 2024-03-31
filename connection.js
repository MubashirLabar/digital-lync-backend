const pg = require("pg");

// const pool = new pg.Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_CONN_STR,
  ssl: {
      rejectUnauthorized: false
  }
  });
  

module.exports = pool;
