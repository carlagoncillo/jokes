const JokeController = require("../controllers/joke.controllers")
console.log("Something to check..", JokeController);

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    app.post('/api/jokes', JokeController.createAJoke);
    app.put('/api/jokes/:id', JokeController.updateOldJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}

// to check if its connected hold Ctrl and click on i.e. getAllJokes