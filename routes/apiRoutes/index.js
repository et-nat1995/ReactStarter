const api = require("express").Router();
const Axios = require('axios').create({
  baseURL: 'http://currency-converter-appmesh-lb-194202240.us-east-1.elb.amazonaws.com'
})

// Make routes here get,post,delete, put

api.get("/hello", (req, res) => {
  res.send("Hello there");
});

api.get("/success", (req, res) => {
  res.send("You Have Successfully Hit This Endpoint. ");
});

api.get('/history', (req, res) => {
  Axios.get('/api/my-currency-conversion-history-service/lists')
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => res.send(err));
})

api.post('/submit', (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  const amount = req.body.amount;
  Axios.post('/api/my-currency-conversion-history-service/from/' + from + '/to/' + to + '/quantity/' + amount)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => res.send(err));
})

api.delete('/delete/:id', (req, res) => {
  const id = req.param.from;
  Axios.delete('/api/my-currency-conversion-history-service/lists/' + id)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => res.send(err));
})

api.put('/update/', (req, res) => {
  Axios.put('/api/my-currency-conversion-history-service/lists', req.body)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => res.send(err));
})

module.exports = api;
