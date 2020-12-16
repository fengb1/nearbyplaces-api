require('dotenv').config({path: '/.env'});
const { Pool } = require('pg');

const postgreConnectionString =
    `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;


const postgrePool = new Pool({
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : postgreConnectionString,
    ssl: { rejectUnauthorized: false }
});

function setPlace (id, name, city, state, description){
    return postgrePool.query("insert into nearbyplaces.place (id, name, city, state, description)" +
      "values (" + id + ", " + name + ", " + city  + ", " + state + "," + description + ")").then(x => x.rows);
}

function getPlaces() {
    return postgrePool.query("select * from nearbyplaces.place").then(x => x.rows);
}

function addReview(id, placeid, content, author) {
    return postgrePool.query("insert into nearbyplaces.review (id, placeid, text, author)" +
      "values (" + id + ", " + placeid + ", " + content + ", " + author + ")").then(x => x.rows);
}

function search(keyword) {
    return postgrePool.query("select * from nearbyplaces.place where name like "
      + keyword + " or city like " + keyword + "or state like " + keyword).then(x => x.rows);
}


module.exports.db = {setPlace, getPlaces, addReview, search}
