const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser');
const db = require("./models");
const { secret } = require("./config/auth_config");



app.use(express.static(__dirname+"./public/"));



var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


console.log(secret)


// db.sequelize.sync();
// // // drop the table if it already exists
db.sequelize.sync({ force:false}).then(() => {
  console.log("Drop and re-sync db.");
 
});
require('./routes/auth_routes')(app);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SFS application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

