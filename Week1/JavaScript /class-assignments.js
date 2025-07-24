// Create a counter in JavaScript (counts down from 30 to 0).

let count = 30;

const timer = setInterval(() => {
  console.log("CountDown", count);
  count--;

  if (count < 0) {
    clearInterval(timer);
  }
}, 1000);

// Create a terminal clock (HH:MM:SS)

// Calculate the time it takes between a setTimeout call and the inner function actually running.