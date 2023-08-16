const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 8000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// views template engine to render dynamic data

// 1. without changing default views directory in template engine method

// to set the view engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: req.query.name,
    age: req.query.age,
  });
});

app.get("/temp", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name},in&APPID=0cc46ad3f326d92a1d396e1e9f3fad17&units=metric`
  )
    .on("data", (chunk) => {
      const objData = JSON.parse(chunk);
      const arrData = [objData];
      console.log(
        `city name is ${arrData[0].name} and the temperature is ${arrData[0].main.temp} `
      );

      res.write(arrData[0].name);
    })

    .on("end", (err) => {
      if (err)
        return console.log(
          "connections closed due to some unconditional errors",
          err
        );
      console.log("end");
      res.end();
    });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "404 ERROR",
  });
});

// 2. By changing the default views directory method

// const templatePath = path.join(__dirname, "../templates");
// app.set("views", templatePath);

// app.get("", (req, res) =>{
//     res.render('index.hbs', {
//         type: "server",
//         condition: "dynamic data"
//     });
// })

app.listen(port, () => {
  console.log(`Server is currently running at port ${port}`);
});
