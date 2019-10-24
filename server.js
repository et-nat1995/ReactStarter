const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path")

const PORT = process.env.PORT || 3001;

const mongoURI = process.env.MONGODB_URI /* || place dev uri here */;

// mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
//     console.log("MongoDB connected!!");
// }).catch(err => console.log(err));


const app = express();
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(require("./routes"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// allows all static files to be loaded and used by the server.
// app.use(express.static("public"));
// builds the req.body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
