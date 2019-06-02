var express = require("express");
var hbs = require("express-handlebars");
var webpush = require("web-push");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + "/server/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/server/views/layouts"
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/server/views");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("*", function(req, res) {
  res.render("error");
});

var server = app.listen(3000, function() {
  console.log("server running at http://localhost:" + server.address().port);
});
