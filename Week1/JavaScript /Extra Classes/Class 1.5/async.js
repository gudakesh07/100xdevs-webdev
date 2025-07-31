function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("hello world");


const fs = require("fs")
// File System library

fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data)
})


console.log("Hello World!!!")

let a = 0;
for(let i = 0; i <100000; i++){
  a = a + i;
}
console.log(a)

console.log("Hello There!!")

// After every single process is done then the control reaches to the async part!!!


console.log("-----------")

setTimeout(function () {
  console.log("Hey there from the inside.")
}, 20000)

setTimeout(function () {
  console.log("Hey there from the inside.")
}, 10000)

let b = 0;
for(let i = 0; i <9; i++){
  b = b = i;
}
console.log(b)

console.log("-----------")