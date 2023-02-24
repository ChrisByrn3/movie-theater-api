const express = require('express');;  //store express module in a const
const app = express(); //initialize express app

const port = 3000; //set port to 3000


app.listen(port, () => {console.log(`app listening at http://localhost: ${port}`)}); //listen on port 3000 and log to console


