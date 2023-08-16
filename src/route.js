const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Welcome to my Home Page");
})

app.get('/about', (req, res) =>{
    res.send("Welcome to my About Page");
})

app.get('/contact', (req, res) =>{
    res.send("Welcome to my Contact Page");
})

app.get('/temp', (req, res) =>{
    res.json({
        id: 1,
        name: "souvik",
        designation: "Software Developer"
    });
})

app.listen( port, "127.0.0.1", () =>{
    console.log(`Currently listening to the port no ${port}`);
});
