const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the verify HTML file
app.use('/zohoverify', express.static(path.join(__dirname, 'zohoverify')));

app.get('/', (req, res) => {
  res.send('Zoho domain verification is in progress.');
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
