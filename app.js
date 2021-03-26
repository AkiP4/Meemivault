const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env' });

const app = express();

const db = mysql.createConnection({
    host: process.env.database_host,
    user: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database
});

const publicDirectory = path.join(__dirname, './public' );
console.log(__dirname);

app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(5000, () => {
    console.log("server has been started on port 5000")
})