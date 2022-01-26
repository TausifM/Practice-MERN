const { application } = require("express");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("data send by browser", req.query.name);
  res.send("get stated express server " + req.query.name);
  console.log("started server");
});
// localhost:5202/?name="tausif"
// if data is send by user in client by req.query.name as it is query
app.get("/about", (req, res) => {
  res.send("about route by express");
});
app.get("/input", (req, res) => {
  res.send(`
  <input type="text" placeholder="enter" value="${req.query.name}"/>
  <button>click</button> 
  <a href="/about" >About Page</a>
  `);
});
app.get("/json", (req, res) => {
  res.send([
    {
      name: "tausif",
      lastName: "sheikh",
    },
    {
      name: "xyz",
      lastName: "sheikh",
    },
  ]);
});
app.listen(5202);
