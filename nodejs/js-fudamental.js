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

// Loop
var x = "20";
for (i = 0; i < 10; i++) {
  console.log(i);
}
// for loop

// while loop
var x = "20";
while (x < 30) {
  console.log(x);
  x++;
}
// while loop

// do while loop
var x = "20";
do {
  console.log(x);
  x++;
} while (x < 30);
// do while loop

// break and continue
var x = "20";
for (i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
// break

var x = "20";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5, 6, 7, 8, 8, 9, 9];
for (i = 0; i < arr.length; i++) {
  if (arr[i] == 5) {
    continue;
  }
  console.log(arr[i]);
}
// continue

var x = "20";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5, 6, 7, 8, 8, 9, 9];
console.log(arr[0]);
// first value in array

var x = "20";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5, 6, 7, 8, 8, 9, 9];
arr.forEach(function (value, index) {
  console.log(value);
});
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.
var x = "20";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5, 6, 7, 8, 8, 9, 9];
arr.filter((item) => {
  console.log(item);
  return item === 8; // 8, 8, 8
  //return item>8; // 8, 8, 8, 9, 9, 10
  //return item>=8; // 8,8, 8, 8, 9, 9, 10
});

// module exports
//we can import in node js like this
console.log(module.exports);
console.log(module.exports.name);
console.log(module.exports.version);
