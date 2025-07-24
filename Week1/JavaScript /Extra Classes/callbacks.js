function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofSomething(a, b, callback) {
  console.log(callback);
  console.log(a);
  console.log(b);
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 + val2;
}

let answer = sumofSomething(5, 2, cube);
console.log(answer);
