var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require('./config/passport');

var PORT = process.env.PORT || 3000;

var app = express();


//required dependencies for passport
//app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them.
require("./routes/freelancer-api-routes.js")(app);
require("./routes/jobs-api-routes.js")(app);
require("./routes/profile-api-routes.js")(app);
require("./routes/login-routes.js")(app);
require("./routes/html-routes.js")(app);

var db = require("./models");

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App now listening at localhost:" + PORT);
    });
})
