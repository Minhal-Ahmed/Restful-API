const express = require("express");
const app = express();
app.use(express.json());
const country = ["UK", "USA", "Canada"];

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/api/search", function (req, res) {
  res.send("API Search");
});

//first parameter is url
//second is a function with two inputs one is request and one is response
app.get("/api/products", function (req, res) {
  res.send(country);
});
//get one resource
app.get("/api/products/:index", function (req, res) {
  if (!country[req.params.index])
    return res.status(400).send("Country not found");
  res.send(country[req.params.index]);
});
//update one resource with id e.g. index
app.put("/api/products/:index", function (req, res) {
  //   console.log(req.body);
  country[req.params.index] = req.body.name;
  res.send(country[req.params.index]);
});
//delete one resource
app.delete("/api/products/:index", function (req, res) {
  country.splice(req.params.index, 1);
  res.send(country);
});
//create one resource
app.post("/api/products", function (req, res) {
  country.push(req.body.name);
  res.send(country);
});

app.listen(3000);