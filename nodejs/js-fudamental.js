// Differce of equal to and strict equal to
var x = "30";
if (x == 30) {
  console.log("result match");
}
// because above check only values not types;

if (x === 30) {
  console.log("result unmatch");
}
// because above check values & types;
