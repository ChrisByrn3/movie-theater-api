const express = require('express'); // import express
const app = express(); // calls express function and stores return value in app
const port = 3000; // port number
const { db } = require('./db') // import db from db.js
const { Show } = require('./models') // import Show model from models/index.js

app.get("/shows/:id", (req, res) => {
    Show.findByPk(req.params.id)
        .then((show) => {
            res.json(show)
        })
        .catch((err) => {
            console.log(err)
        })
    User.findByPk(req.params.id)
        .then((user) => {
            res.json(user)
        }
        )
        .catch((err) => {
            console.log(err)
        }
        )
})
app.listen(port, async () => {
    await
    sequelize.sync();
   console.log("Your server is listening on port " + port);
})