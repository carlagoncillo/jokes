// 1. import mongoose - require mongoose
const mongoose = require("mongoose");
// 3. create a variable for database(db_name) = "anything you want"
const db_name = "Jokes Database";

// 2. copy from platform
mongoose.connect('mongodb://localhost/' + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${db_name} database`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));