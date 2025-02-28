const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the db connection

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Fetch all products
app.get('/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(rows);
  });
});

// Fetch a product by ID
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (!row) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(row); // Return the single product
  });
});

// Add a new product
app.post('/products', (req, res) => {
  const { image, title, count, price, text, material_description, url, grades, size } = req.body;
  const stmt = db.prepare("INSERT INTO products (image, title, count, price, text, material_description, url, grades, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
  stmt.run(image, title, count, price, text, material_description, url, grades, size, function(err) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(201).json({ id: this.lastID, image, title, count, price, text, material_description, url, grades, size });
  });
});

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
