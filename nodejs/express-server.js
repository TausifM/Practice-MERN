const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("", (_, res) => {
  // console.log("data send by browser", req.query.name);
  // res.send("get stated express server " + req.query.name);
  // console.log("started server");
  res.sendFile(`${publicPath}/index.html`);
});
// localhost:5202/?name="tausif"
// if data is send by user in client by req.query.name as it is query
app.get("/aboutme", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/404.html`);
});
// app.get("/about", (req, res) => {
//   res.send("about route by express");
// });

// app.get("/input", (req, res) => {
//   res.send(`
//   <input type="text" placeholder="enter" value="${req.query.name}"/>
//   <button>click</button>
//   <a href="/about" >About Page</a>
//   `);
// });

// app.get("/json", (req, res) => {
//   res.send([
//     {
//       name: "tausif",
//       lastName: "sheikh",
//     },
//     {
//       name: "xyz",
//       lastName: "sheikh",
//     },
//   ]);
// });

app.listen(5202);
