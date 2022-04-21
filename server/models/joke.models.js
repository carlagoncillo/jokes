// Create the schema
// import mongoose - require mongoose
const mongoose = require("mongoose");

// a. the schema - the rules that the entries in the db must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchLine: String
}, {timestamps: true});

// b. the model - this is use to make the actual queries to the db
const Joke = mongoose.model("Joke", JokeSchema);
//     ^ this Joke is an object and will talk to the database

module.exports = Joke;
