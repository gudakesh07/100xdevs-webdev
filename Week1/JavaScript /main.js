let firstName = "Ritu";
let LastName = "Raj";

let name = firstName + LastName;
console.log(`Hello there ${firstName} ${LastName}`);

let gender = "Male";

if (gender === "male" || gender === "Male") {
  console.log("Hello Sir");
} else {
  console.log("Hello Maam");
}

for (let i = 0; i <= 1000; i++) {
  console.log(`So the current Count is ${i}`);
}

// Write a program that prints all the even numbers in an array!!
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenarr = [];
let oddarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenarr.push(arr[i]);
  } else {
    oddarr.push(arr[i]);
  }
}
console.log(evenarr);
console.log(oddarr);

// Write a program to print the biggest number in an array!!

let array = [45, 65, 76, 94, 21];

let biggest = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > biggest) {
    biggest = array[i];
  }
}
console.log(biggest);

// Write a program that prints all the male people's firstName given a complex Objects.

let users = [
  {
    firstName: "Kirat",
    gender: "Male",
  },
  {
    firstName: "Raj",
    gender: "Male",
  },
  {
    firstName: "Mahi",
    gender: "Female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "Male") {
    console.log(users[i]["firstName"]);
  } else {
    console.log("Female hai!!");
  }
}
console.log("End");

// Write a program that reverses all the elements of an array.

let img = [87, 56, 34, 21];

img.reverse();
console.log(img);

// Write a function that finds the sum of two numbers.

function sum(a, b) {
  console.log(a + b);
}

sum(87, 65);
