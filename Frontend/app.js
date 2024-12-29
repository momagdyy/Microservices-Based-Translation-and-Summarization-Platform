const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios'); // Add axios for API requests

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/login'); // Redirect to login if accessing the root URL
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are correct
  if (username === 'admin' && password === 'admin') {
    res.redirect('/dashboard');  // Redirect to dashboard on successful login
  } else {
    res.render('login', { error: 'Invalid username or password' });  // Pass the error to the view
  }
});

app.get('/login', (req, res) => {
  res.render('login', { error: null }); // Render the login page with no error initially
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Render the dashboard page
});

app.get('/summarize', (req, res) => {
  res.render('summarize', { summary: null, error: null }); // Render the summarize page with default values
});

app.post('/summarize', async (req, res) => {
  const { text, style = 'formal' } = req.body; // Default style set to 'formal'

  if (!text) {
    return res.render('summarize', { summary: null, error: 'Please provide text to summarize.' });
  }

  try {
    // Forward request to the Summarization API
    const response = await axios.post('http://localhost/api/summarize', {
      text,
      style,
    });
    res.render('summarize', { summary: response.data.summary, error: null });
  } catch (error) {
    console.error('Error in Summarization:', error.message);
    res.render('summarize', { summary: null, error: 'Failed to summarize text. Please try again later.' });
  }
});

app.get('/translate-en2ar', (req, res) => {
  res.render('translate-en2ar', { translatedText: null, error: null }); // Default values
});

app.post('/translate-en2ar', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.render('translate-en2ar', { translatedText: null, error: 'Please provide text to translate.' });
  }

  try {
    // Forward request to the Translation API
    const response = await axios.post('http://localhost/api/translate/en2ar', { text });
    res.render('translate-en2ar', { translatedText: response.data.translation, error: null });
  } catch (error) {
    console.error('Error in EN to AR Translation:', error.message);
    res.render('translate-en2ar', { translatedText: null, error: 'Failed to translate text. Please try again later.' });
  }
});

app.get('/translate-ar2en', (req, res) => {
  res.render('translate-ar2en', { translatedText: null, error: null }); // Default values
});

app.post('/translate-ar2en', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.render('translate-ar2en', { translatedText: null, error: 'Please provide text to translate.' });
  }

  try {
    // Forward request to the Translation API
    const response = await axios.post('http://localhost/api/translate/ar2en', { text });
    res.render('translate-ar2en', { translatedText: response.data.translation, error: null });
  } catch (error) {
    console.error('Error in AR to EN Translation:', error.message);
    res.render('translate-ar2en', { translatedText: null, error: 'Failed to translate text. Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
