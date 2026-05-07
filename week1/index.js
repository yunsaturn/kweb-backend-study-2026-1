const express = require("express");

const app = express();

<<<<<<< HEAD
app.get("/hello", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/bye", (req, res) => {
    res.send("<h1>Goodbye, World!</h1>");
});

app.listen(8080, () => {
    console.log('Server listening on port 8080!');
=======
app.get("/asdf", (req, res) => {
    res.send("<h1>Hi, Human!</h1>");
});

app.get("/burger", (req, res) => {
    res.send("<h1>Im hungry!</h1>");
});

app.listen(8080, () => {
    console.log('Server listening on port 3000!');
>>>>>>> 111442f44687e3dc55cb87502685a605e968435f
});