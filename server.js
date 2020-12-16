const express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');
const db = require('./db');

const app = express();

const port = process.env.PORT || 3002;

var placeId = 1;
var reviewId = 1;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  response.send("Welcome to Nearbyplaces API");
})

app.get('/place', (req, res) => {
    let name = req.body.name;
    let city = req.body.city;
    let state = req.body.state;
    let description = req.body.description;
    let id = placeId;
    placeId += 1;
    db.setPlace(id, name, city, state, description).then(x => response.json(x));
})

app.get('/places', (req, res) => {
    db.getPlaces().then(x => response.json(x));
})

app.get('/review/:placeId', (req, res) => {
    let placeid = req.body.placeid;
    let author = req.body.author;
    let content = req.body.content;
    let id = reviewId;
    reviewId += 1;
    db.addReview(id, placeid, content, author).then(x => response.json({message: "Added review"}));
})

app.get('/search', (req, res) => {
    let keyword = req.body.keyword;
    db.search(keyword).then(x => response.json(x));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
