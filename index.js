const express = require('express');
const app = express();
const PORT = 3000;

// Dummy list of quotes
const quotes = [
  { author: "Franklin D. Roosevelt", quote: "The only limit to our realization of tomorrow is our doubts of today." },
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
  { author: "Steve Jobs", quote: "Stay hungry, stay foolish." }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Quote API!');
});

// Random quote route
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
