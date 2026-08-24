const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'prod-db.internal.shprengel.co',
  user: 'app_service',
  password: process.env.DB_PASSWORD,
  database: 'accounts',
});

function findUserByEmail(email, callback) {
  pool.query(`SELECT id, email, role FROM users WHERE email = '${email}'`, callback);
}

module.exports = { pool, findUserByEmail };
