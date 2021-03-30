const mysql = require("mysql");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const db = mysql.createConnection({
    host: process.env.database_host,
    user: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database
});

exports.register = (req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    db.query("SELECT email FROM users WHERE email = ?", [email], async (error, results) => {
        if(error) {
            console.log(error);
        }

        if(results.length > 0 ) {
            return res.render("register", {
                message: "That email is already in use"
            })

        } else if(password !== passwordConfirm) {
            return res.render("register", {
            message: "Passwords do not match"
        });
        }

        let hashedPassword = await bcrypt.hash(password, 8); //usually 8 rounds of encryption is more than enough
        console.log(hashedPassword);

        db.query("INSERT INTO users SET ?", {name: name, email: email, password: hashedPassword }, (error, results) =>{
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render("register", {
                    message: "User registered"
                });
            }
        })

    });

}

//npm i bcryptjs
//npm i cookie-parser jsonwebtoken