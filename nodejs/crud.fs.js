const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
//__dirname gives current directory name and folder crud of same directory call.
const filePath = `${dirPath}/fileName.txt`;
fs.writeFileSync(filePath, "This simple text files");
// fileName.txt created in Crud folder
fs.readFile(filePath, "utf8", (err, files) => {
  console.log(files);
});
// result This simple text files

fs.appendFile(filePath, "and file msg is added & updated", (err) => {
  if (!err) console.log("files are added and updated");
});
// files are added and updated
// in crud folder fileName.txt file - This simple text filesand
// file msg is added & updated
fs.rename(filePath, `${dirPath}/fileNameRename.txt`, (err) => {
  if (!err) console.log("file name rename updated");
});
// file name updated from fileName to fileNameRename
fs.unlinkSync(`${dirPath}/fileNameRename.txt`);
// this will deleted our created file with te path we prefer
