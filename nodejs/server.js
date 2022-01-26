const http = require("http");

const server = (req, resp) => {
  //resp.status(200).json("<h5>Server Start</h5>");
  resp.write("<h1>Server Start</h1>");
  resp.end(); // where to end the process
};

http.createServer(server).listen(4500);
// here createServer is a function that takes two arguments req and resp
// req is the request object and resp is the response object
// req and resp are objects that are passed to the createServer function
// when the server is created.
// createServer also takes function as a parameter
// http handles the request and response
