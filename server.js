'use strict';

require('dotenv');
const express = require('express');
// const cors = require('cors');

const weather = require('./modules/weather.js');
const app = express();
console.log(process.env);
const PORT = process.env.PORT || 3002;

app.get('/weather', weatherHandler);


function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!');
    });
}

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
