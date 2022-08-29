let numbers = [15, 70, 30, 20];

/* const bigAndSmall = (array) => {
  let sortArray = array.sort((a, b) => a - b);
  let first = sortArray[0];
  let last = sortArray.pop();
  return first + last;
}; */

// BOSS mode

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

// Kata de codewars

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

// autre kata

function stringToArray(string) {
  let result = string.split(" ");
  return result;
}

//

function countChar(string, char) {
  let text = string.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == char.toLowerCase()) {
      counter++;
    }
  }
  return counter;
}
