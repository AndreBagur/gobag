require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


//gets all word entries from the database
app.get('/', (req, res) => {


})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);