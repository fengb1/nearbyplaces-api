const express = require("express");
var cors = require("cors");

const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  response.send("Welcome to API");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
