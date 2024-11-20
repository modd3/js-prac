import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', {intro: "Hello, Enter Name Below"})
});

app.post("/submit", (req, res) => {
  let names = req.body["fName"] + req.body["lName"];
  let num = names.length;

  res.render("index.ejs", {num: num})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
