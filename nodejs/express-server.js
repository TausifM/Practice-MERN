const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("data send by browser", req.query.name);
  res.send("get stated express server " + req.query.name);
  console.log("started server");
});
// if data is send by user in client by req.query.name as it is query
app.get("/about", (req, res) => {
  res.send("about route by express");
});
app.listen(5202);
