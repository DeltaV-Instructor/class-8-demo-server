'use strict';
console.log('image finder server is connected!!!');


//REQUIRE
//====PACKAGES
const express = require('express');
//via npm
//the command to download it and save is 'npm install -S express
const cors = require('cors');
//Cross origin Resource sharing: allows connection between 2 local servers or websites: it can block or allow access to any list of urls.
//By default it allows localhost to talk to itself
require('dotenv').config();
const axios = require('axios');

//USE
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

//ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello from the Image Finder Server, have a great day!');
});

app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});
//CLASSES
//ERRORS

//LISTEN
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

