const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi i ma runging');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
