require('dotenv').config(); // Loads variables from .env in local dev
const express = require('express');
const path = require('path');
const connectDB = require('./db'); // Import our DB connection function

const app = express();
const port = process.env.PORT || 3000;

// Import route files
const userRoutes = require('./routes/user_management');
const taskRoutes = require('./routes/tasks_management');

// Connect to DB
connectDB();

// Middleware to serve static files (CSS, JS, images, HTML)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Route for homepage (default to main.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
