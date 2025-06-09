// routes/books.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'book_notes',
    password: '2002',
    port: 5432,
});

// INDEX ROUTE: List all books from database
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM book');
    const books = result.rows;
    res.render('index', { books });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books');
  }
});

module.exports = router;
