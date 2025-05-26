# Book-Notes
I read a lot of books but after I finish reading them I often don't remember all the most salient parts of the book. So I started taking notes. This capstone project is built on this idea.
### 📚 Project Structure
book-notes-app/
│
├── 📁 public/                 # Static files (CSS, JS, images)
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
│
├── 📁 views/                  # EJS views
│   ├── partials/             # Reusable partials like header/footer
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs             # Home page showing list of books
│   ├── note.ejs              # Single note/book details
│   ├── new_book.ejs          # Form to add a new book
│   └── edit.ejs              # Form to edit a book
│
├── 📁 routes/                # Route definitions
│   └── books.js              # All routes related to books/notes
│
├── 📁 models/                # Data models (if using MongoDB or other DB)
│   └── Book.js
│
├── 📁 controllers/           # Route handler logic
│   └── bookController.js
│
├── 📁 config/                # DB config or other setup
│   └── db.js
│
├── 📁 utils/                 # Utility functions (if needed)
│
├── 📄 .env                   # Environment variables
├── 📄 .gitignore
├── 📄 package.json
├── 📄 server.js              # Main entry point

