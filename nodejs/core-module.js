//fs
//buffer
//http
// node js core module

// Core Module	Description
// http	- http module includes classes, methods and events to create Node.js http server.
// url	- url module includes methods for URL resolution and parsing.
// querystring	- querystring module includes methods to deal with query string.
// path	- path module includes methods to deal with file paths.
// fs	- fs module includes classes, methods, and events to work with file I/O.
// util	- util module includes utility functions useful for programmers.

fs = require("fs").writeFileSync; // recomended to use fs at top level when we require/import
fs("test2.txt", "msg to frds");
fs.writeFileSync("test.txt", "Hello World"); // create test.text
// you can also do shortrcuts like
console.log(__dirname); // C:\Practice and Learning\nodejs
console.log(__filename); //C:\Practice and Learning\nodejs\core-module.js
