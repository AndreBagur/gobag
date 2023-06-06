require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


//gets all scenario entries from the database
app.get('/gobag', (req, res) => {
  db.getAll()
  .then((scenarios) => {
    res.send(scenarios);
  })
  .catch((err) => {
    res.send('error getting scenarios from the database', err);
  })

})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);