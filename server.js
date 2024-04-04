const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./autogear.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) console.error('Database opening error: ', err);
});

// Create users table if not exists
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)");

// Registration Endpoint
app.post('/register', (req, res) => {
    const { newUsername, newPassword } = req.body;
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  
    db.run(query, [newUsername, newPassword], function(err) {
      if (err) {
        console.error(err.message);
        res.send("Failed to register");
      } else {
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        res.render('account', { username: newUsername });
      }
    });
  });  
// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ?`;

  db.get(query, [username], (err, row) => {
      if (err) {
          res.status(400).json({ "error": err.message });
          return;
      }
      if (row && row.password === password) {
          // Correct password, redirect to account page
          res.render('account', { username: row.username });
      } else {
          return
      }
  });
});
// Start the server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
