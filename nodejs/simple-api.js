const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write("simple api");
    res.end();
  })
  .listen(4200);
