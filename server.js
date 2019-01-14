var express = require("express");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3001;

const mongoURI = process.env.MONGODB_URI /* || place dev uri here */;

// mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
//     console.log("MongoDB connected!!");
// }).catch(err => console.log(err));


var app = express();
app.use(require("./routes"));

// allows all static files to be loaded and used by the server.
app.use(express.static("public"));
// builds the req.body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});