// 0. Give access to node to your environnement variables
require("dotenv").config()

// 1. Connexion to BDD
require("./config/db");

// 2. We need express, morgan
const express = require("express");
const logger = require("morgan");


const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use("/api", require("./routes/index.routes"))
// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION



// ROUTES
//  GET  / route - This is just an example route
// app.get('/', (req, res) => {
//     res.send("<h1>LAB | Express Mongoose Recipes</h1>");
// });


//  Iteration 3 - Create a Recipe route
//  POST  /recipes route


//  Iteration 4 - Get All Recipes
//  GET  /recipes route


//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route


//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route


//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route



// Start the server
app.listen(process.env.PORT, () => console.log('My first app listening on port 3000!'));



//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
