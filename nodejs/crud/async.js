console.log("first step");
console.log("second step");
console.log("third step");

console.log("first step");
setTimeout(() => {
  console.log("second step");
}, 2000);
console.log("third step");
// this example clearly says that JS is asynchronous nature
// Drawbacks of this

let a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
}, 2000);
console.log(a + b);

// 10;
// we cannot add b, because it cannot wait when execution is done
// for handling this situation we need callbacks or Promises
