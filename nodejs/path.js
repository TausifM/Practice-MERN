const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

for (i = 0; i < 5; i++) {
  fs.writeFileSync(
    dirPath + "/hello " + i + ".txt",
    "a file by path and __dirname"
  );
  //fs.writeFileSync(`hello${i}.txt`, "a file by path and __dirname")
}
fs.readdir(dirPath, (err, files) => {
  // console.log(files);
  files.forEach((item) => {
    console.log("files name is ", item);
  });
});
// first parameter in fs.readdir above is error and second want to want to read, here is files
