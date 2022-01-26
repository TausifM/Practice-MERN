const http = require("http");

const server = (req, resp) => {
  resp.status(200).json("<h5>Server Start</h5>");
};

http.createServer(server).listen(4500);
