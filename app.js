const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.send("Hello Weather");
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})