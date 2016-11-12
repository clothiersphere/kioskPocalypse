const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/db');
const kiosks = require('./server/kiosks');


const port = process.env.PORT || 1234;
const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/kiosks/create', (req, res) => {
  res.send('WHEE');
});

//GET 
  // admin
    //getall kiosks
app.get('/kiosks', kiosks.findAll);
      //get info on a single kiosk
app.get('/kiosks/:id', kiosks.findById);

//POST
  // admin
    //create a kiosk entry
app.post('/kiosks/create', kiosks.createEntry);
    //disable a kiosk
// app.post('/kiosks/disable', kiosks.disableKiosk);
  // user 
    //rent a charger 
    //return a charger 
    //sell a charger 
app.post('/kiosks/update/:id', kiosks.updateKiosk)
    


app.listen(port, () => {
  console.log('Server running on port: ' + port);
});

