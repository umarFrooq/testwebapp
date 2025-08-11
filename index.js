const express = require('express');
const app = express();

// Use Azure's PORT environment variable or default to 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello! The app is running successfully on Azure!');
});

// Add a health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
