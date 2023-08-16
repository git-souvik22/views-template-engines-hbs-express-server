const path = require('path');
const express = require('express');
const app = express();
const port = 5000;


// console.log(path.join(__dirname, '../ExpressJs/public'));


// built in middleware of Express.js to serve static html files
const staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));

app.listen(5000, () =>{
    console.log(`Server is currently running at port ${port}`);
})