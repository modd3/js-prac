import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8021;
var bandName = "";


function logger(req, res, next) {
  console.log(req.url, req.method);
  next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));
app.use(logger);

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res) => {
 
  res.send(`<h1>Post Success!</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
