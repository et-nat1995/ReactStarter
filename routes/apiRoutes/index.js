const api = require("express").Router();

// Make routes here get,post,delete, put

api.get("/hello", (req, res) => {
  res.send("Hello there");
});

api.get("/success", (req, res) => {
  res.send("You Have Successfully Hit This Endpoint. ");
});

module.exports = api;
