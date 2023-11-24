const express = require("express");
const app = express();

const PORT = 4000;

app.get("/home", (req, res) => {
  res.status(200).json("Welcome Back!");
});

app.listen(PORT, () => {
  console.log("`Server running ar ${PORT}");
});

module.exports = app;
