// routes/editor.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Database connection (reuse your config)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'book_notes',
    password: '2002',
    port: 5432,
});

// Route to display the BookNote editor
router.get('/', (req, res) => {
  res.render('note', { 
    title: 'My Reading Journal',
    pageTitle: 'BookNote - Digital Reading Journal'
  });
});

// Save book note
router.post('/save', async (req, res) => {
    const { content, bookInfo, bookId } = req.body;
    try {
        // Save note and book info
        await pool.query(
            'UPDATE book SET notes = $1, title = $2, author = $3, category = $4 WHERE id = $5',
            [JSON.stringify(content), bookInfo.title, bookInfo.author, bookInfo.genre, bookId]
        );
        res.json({ success: true, message: 'Book note saved successfully', timestamp: new Date().toISOString() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error saving book note' });
    }
});

// Load book note
router.get('/load/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM book WHERE id = $1', [bookId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        const book = result.rows[0];
        res.json({
            content: book.notes ? JSON.parse(book.notes) : [],
            bookInfo: {
                title: book.title,
                author: book.author,
                genre: book.category,
                rating: book.rating || 0
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error loading book note' });
    }
});

module.exports = router;