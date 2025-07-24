function sumOfSomething(a, b, callback) {
  console.log(callback);
  console.log(a);
  console.log(b);
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 + val2;
}

const ans = sumOfSomething(2, 2, function (n) {
  return n * n * n;
});

console.log(ans);
