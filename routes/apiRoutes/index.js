const api = require("express").Router();

// Make routes here get,post,delete, put

api.get("/hello", (req, res) => {
  res.send("Hello there");
});

api.get("/iLikePie", (req, res) => {
  res.send("You like pie");
});

module.exports = api;
