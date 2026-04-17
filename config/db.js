const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cafeteria'
});

connection.connect((err) => {
  if (err) {
    console.log("⚠️ MySQL no conectado (modo demo)");
    console.log(err.message);
    return;
  }

  console.log("✅ MySQL conectado");
});

module.exports = connection;