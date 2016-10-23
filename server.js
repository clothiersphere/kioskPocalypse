const express = require('express');
const bodyParser = require('body-parser');

const db = require('./server/db');


const port = process.env.PORT || 1234;
const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

// app.post('/api/users', db.checkUser);


app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
