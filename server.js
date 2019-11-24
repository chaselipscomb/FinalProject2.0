const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/requesthero', (req, res) => {
  console.log("work");
  const BASEURL = "https://superheroapi.com/api/";
  const APIKEY = "2736829286383037";
  axios.get(BASEURL + APIKEY + "/search/" + "hulk").then(res => {console.log(res.data.results[0])})
  });


