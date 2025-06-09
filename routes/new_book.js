const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'book_notes', // ✅ Correct name
    password: '2002',
    port: 5432,
});

pool.connect();


// GET route to show the new book form
router.get('/add-book', (req, res) => {
    res.render('new_book');
});

// POST route to add a new book
router.post('/add-book', upload.single('img'), async (req, res) => {
    const { title, author, summary, category, notes } = req.body;
    const cover = req.file ? req.file.filename : null;

    try {
        await pool.query(
            'INSERT INTO book (title, author, summary, category, cover, notes) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, author, summary, category, cover, notes]
        );
        res.redirect('/note'); // or wherever you want to redirect after adding
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding book');
    }
});

router.get('/book', (req, res) => {
    pool.query('SELECT * FROM book', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

router.get('/book/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM book WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

router.put('/book/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, genre } = req.body;
    pool.query('UPDATE book SET title = $1, author = $2, genre = $3 WHERE id = $4', [title, author, genre, id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Book modified with ID: ${id}`);
    });
});

router.delete('/book/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM book WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Book deleted with ID: ${id}`);
    });
});

module.exports = router;