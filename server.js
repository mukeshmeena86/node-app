'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello This is A Node JS APP Finally Deployed - We are testing CICD pipeline\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
