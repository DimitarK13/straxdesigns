const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
