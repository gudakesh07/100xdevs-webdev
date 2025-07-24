// A function in a set of statements that performs a task or calculate a value.
// It should take some input and return an output where there is an obvious relationship between input and the output.
function findsum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

let totalSum = findsum(5);
console.log(totalSum);

// Callback function

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofSquared(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumofCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

let number = sumofCubes(5, 5);
console.log(number);
