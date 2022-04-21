const express = require("express");
const app = express();
const PORT = 8000;

//MIDDLEWARE (always after imports)
app.use(express.json(), express.urlencoded({extended: true}))

// 1. import mongoose - require mongoose
// 2. connect to mongodb by the file here
require("./config/mongoose.config");
// 3. create mongoose schema
// 4. use mongoose model to make CRUD functions -> controller
// 5. create routes to execute the functions to the db
const routesFunction = require("./routes/joke.routes");
routesFunction(app);

app.listen(PORT, ()=> console.log(`server up on port:${PORT}`))