// All CRUD operations
// our controller is importing the Model
const Joke = require("../models/joke.models")

module.exports = {

    // READ ALL
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allDaJokes => res.json({ jokes: allDaJokes }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        // READ
        getOneJoke: (req, res) => {
            Joke.findOne({ _id: req.params.id})
                .then(oneJoke => res.json({ joke: oneJoke }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // CREATE or POST
            createAJoke: (req, res) => {
                Joke.create(req.body)
                .then(newJoke => res.json({ joke: newJoke}))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // UPDATE or PUT
            updateOldJoke: (req, res) => {
                Joke.findByIdAndUpdate(
                    {_id: req.params.id}, 
                    req.body,
                    {new: true, runValidators: true}
                    )
                    .then(updateJoke=> res.json({ joke: updateJoke }))
                    .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // DELETE
                deleteJoke: (req, res) =>{
                    Joke.deleteOne({ _id: req.params.id })
                    .then(result => res.json({ result: result }))
                    .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            }

}