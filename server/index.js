const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const axios = require('axios');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static('client/dist'));


app.get('/getFiveRandom', (req, res) => {  
    axios.get('http://ec2-3-80-146-248.compute-1.amazonaws.com/getFiveRandom')
    .then(results => {
      res.json(results.data);
    })
    .catch(err => {
      console.log("Error with getting five random");
  });
});

app.get('/products/:id/reviews', (req, res) => {
    axios.get(`http://ec2-13-58-187-52.us-east-2.compute.amazonaws.com:3030/products/${req.params.id}/reviews`)
    .then(results => {
      res.json(results.data);
    })
    .catch(err => {
      console.log("Error with loading review");
    });
})

app.get('/products/:id', (req, res) => {
    axios.get(`http://ec2-3-93-54-61.compute-1.amazonaws.com:3000/products/${req.params.id}`)
    .then(results => {
      res.json(results.data);
    })
    .catch(err => {
      console.log("Error with loading photos");
    });
})

app.get('/productinfo/:id', (req, res) => {
  axios.get(`http://ec2-13-59-174-32.us-east-2.compute.amazonaws.com:3030/productinfo/${req.params.id}`)
  .then(results => {
    res.json(results.data);
  })
  .catch(err => {
    console.log("Error with loading overview");
  });
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

