const arithmetic = (op) => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let answer = "";
  if (op == "add") {
    answer = num1 + num2;
  } else if (op == "minus") {
    answer = num1 - num2;
  } else if (op == "mult") {
    answer = num1 * num2;
  } else if (op == "div") {
    answer = num1 / num2;
  }

  document.getElementById("result").innerText = "The Result is: " + answer;
};
const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
let rNum = random(1, 100);
let count = 0;
const guess = () => {
  let eNum = Number(document.getElementById("guessInput").value);
  console.log(count);
  if (rNum == eNum) {
    document.getElementById("guessResult").innerText =
      "You have guessed the number";
  } else if (eNum > rNum) {
    document.getElementById("guessResult").innerText = "The number is smaller";
  } else if (eNum < rNum) {
    document.getElementById("guessResult").innerText = "The number is greater";
  }
  count++;
};
const bckgrnd = () => {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  document.getElementById(
    "container"
  ).style.backgroundColor = `rgb(${r},${g},${b})`;
};
setInterval(bckgrnd(),100);
