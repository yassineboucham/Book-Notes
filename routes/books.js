// routes/books.js
const express = require('express');
const router = express.Router();

// Sample data (you can later replace with DB)
const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', summary: 'Small habits make a big difference.', category: 'Self-Help' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport', summary: 'Focus is a superpower.', category: 'Productivity' },
  { id: 3, title: 'The Power of Habit', author: 'Charles Duhigg', summary: 'Habits are the key to success.', category: 'Self-Help' },
  { id: 4, title: 'The 4 Disciplines of Execution', author: 'Chris McChesney', summary: 'Focus on the right things.', category: 'Business' },
  { id: 5, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', summary: 'Be proactive, be proactive, be proactive.', category: 'Self-Help' },
  { id: 6, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', summary: 'Be proactive, be proactive, be proactive.', category: 'Self-Help' },
  { id: 7, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', summary: 'Be proactive, be proactive, be proactive.', category: 'Self-Help' },
  { id: 8, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', summary: 'Be proactive, be proactive, be proactive.', category: 'Self-Help' },
];

// INDEX ROUTE: List all books
router.get('/', (req, res) => {
  res.render('index', { books });
});

module.exports = router;
