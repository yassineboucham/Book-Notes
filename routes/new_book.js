const express = require('express');
const router = express.Router();

// GET route to show the new book form
router.get('/add-book', (req, res) => {
    res.render('new_book');
});

module.exports = router;