const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./products.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create a table for products
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    count INTEGER,
    price REAL,
    text TEXT,
    material_description TEXT,  // New field for material description
    url TEXT,
    grades TEXT,
    size TEXT
  )`);
});

module.exports = db;
