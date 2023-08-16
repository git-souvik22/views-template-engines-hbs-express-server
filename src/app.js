const express = require('express');
const app = express();

// API  get - read,  
    //  post - create,  
    //  put - update,  
    //  delete - delete;

app.get("/", (req, res) => {
    res.send("hello from the express application");
})

app.get("/about", (req, res) => {
    res.send("hello from the express about application");
})

app.listen(5500, () => {
    console.log("listening to the port at 5500");
})

