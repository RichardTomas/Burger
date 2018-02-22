const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')


const exphbs = require("express-handlebars");

const planRoutes = require('./controllers/burgers_controllers.js')

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handlerbars engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// serves up static assets
app.use(express.static('public'));

// include the plan routes from the controller
app.use(planRoutes);

app.listen(port, function() {
  console.log("listening on port", port);
});