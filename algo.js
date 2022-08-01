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
