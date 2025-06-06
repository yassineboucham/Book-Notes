// routes/editor.js
const express = require('express');
const router = express.Router();

// Route to display the BookNote editor
router.get('/', (req, res) => {
  res.render('editor', { 
    title: 'My Reading Journal',
    pageTitle: 'BookNote - Digital Reading Journal'
  });
});

// API route to save book note with rating and book info
router.post('/save', (req, res) => {
  const { content, bookInfo } = req.body;
  
  // Here you would typically save to your database
  // For now, we'll just log it and send a success response
  console.log('Saved book note:', {
    content,
    bookInfo: {
      title: bookInfo.title,
      author: bookInfo.author,
      genre: bookInfo.genre,
      rating: bookInfo.rating
    }
  });
  
  res.json({ 
    success: true, 
    message: 'Book note saved successfully',
    timestamp: new Date().toISOString()
  });
});

// API route to load book note content
router.get('/load', (req, res) => {
  // Here you would typically load from your database
  // For now, we'll return sample book note content
  const sampleBookNote = {
    content: [
      {
        id: "1",
        type: "heading",
        content: [
          {
            type: "text",
            text: "📖 My Reading Notes",
            styles: {}
          }
        ],
        props: { level: 1 }
      },
      {
        id: "2",
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Start writing your thoughts about this book below. Use the toolbar to add quotes, reflections, and bookmarks!",
            styles: {}
          }
        ]
      }
    ],
    bookInfo: {
      title: "Sample Book Title",
      author: "Sample Author",
      genre: "Fiction",
      rating: 4
    }
  };
  
  res.json(sampleBookNote);
});

module.exports = router;