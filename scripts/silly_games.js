//guess a number
let answer = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== answer) {
  guess = prompt("Guess a number between 1 and 10:");

  if (guess === null) {
    console.log("Goodbye!");
    break;
  } else if (guess == answer) {
    console.log("Correct! The answer was " + answer);
  } else {
    console.log("Incorrect. Please try again.");
  }
}
//guess a name 
const words = ["javascript", "programming", "computer", "science", "algorithm"];
let answer = words[Math.floor(Math.random() * words.length)];
let guess;
let attempts = 0;

while (guess !== answer) {
  guess = prompt("Guess the word:");
  attempts++;

  if (guess === null) {
    console.log("Goodbye!");
    break;
  } else if (guess === answer) {
    console.log("Correct! The answer was " + answer + " and it took you " + attempts + " attempt(s) to guess it");
  } else {
    console.log("Incorrect. Please try again.");
  }
}
//guess a number between 
let max = 100;
let min = 1;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;
let attempts = 0;

while (guess !== answer) {
  guess = parseInt(prompt("Guess a number between " + min + " and " + max));
  attempts++;

  if (guess === null) {
    console.log("Goodbye!");
    break;
  } else if (guess === answer) {
    console.log("Correct! The answer was " + answer + " and it took you " + attempts + " attempt(s) to guess it");
  } else if (guess > answer) {
    console.log("Too high. Please try again.");
  } else if (guess < answer) {
    console.log("Too low. Please try again.");
  }
}

