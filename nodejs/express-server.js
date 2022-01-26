const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("get stated express server");
  console.log("started server");
});
app.get("/about", (req, res) => {
  res.send("about route by express");
});
app.listen(5202);
