const express = require('express');

const app = express();

const number = Math.random()*3

app.get('/', (req, res) => {
  res.send('Hello from kubernetes cluster, this is my number: '+ number);
})

app.listen(8080, () => {
  console.log('Running on 8080!');
})