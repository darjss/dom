let root = document.querySelector("#root");
let calc = document.createElement("div");
calc.className = "calc";
root.appendChild(calc);
let display = document.createElement("div");
display.className = "display";
calc.appendChild(display);
let text = document.createElement("p");
display.appendChild(text);
let btnCont = document.createElement("div");
btnCont.className = "buttonContainer";
calc.appendChild(btnCont);
let num1 = "";
let num2 = "";
let answer = "";
let operation = "";
content = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const writeOnClick = (a) => {
  text.innerText += a;
};
const reset = () => {
  text.innerText = "";
  num1 = "";
  num2=""
  operation = "";
};
const checkNum = (num) => {
  let result = false;
  let n = Number(num);
  for (let i = 0; i < 10; i++) {
    n === i ? (result = true) : null;
  }
  // !(answer == "") ? (text.innerText = "") : null;
  return result;
};
const checkOp = (op) => {
  let result = true;

  if(op == "/" || op == "x" || op == "-" || op == "+"){
    operation = op;
    console.log(operation);
    if(!(answer=="")){
      text.innerText="";
    }
  }else{
    result = false;

  }
  console.log(operation);
  return result;
};
const nextNum = () => {
  if (!(num1 == "") && answer=="") {
    calculate();
  } else {
    num1 = Number(text.innerHTML);
    text.innerHTML = "";
  }
};
const calculate = () => {
  num2 = Number(text.innerHTML);
  operation == "/"
    ? (answer = num1 / num2)
    : operation == "x"
    ? (answer = num1 * num2)
    : operation == "-"
    ? (answer = num1 - num2)
    : operation == "+"
    ? (answer = num1 + num2)
    : null;
  text.innerText = answer;
  console.log(num1);
  console.log(operation);
  console.log(num2);
  console.log(answer);
  num1 = Number(text.innerText);
  num2 = "";
  console.log(num1);
};
const negate = () => {
  text.innerText[0] == "-"
    ? (text.innerText = text.innerText.slice(1, text.innerText.length))
    : (text.innerText = "-" + text.innerText);
};
for (let i = 0; i < 19; i++) {
  let btn = document.createElement("div");
  btn.innerText = content[i];
  btn.id = i;
  btnCont.appendChild(btn);
  i == 16
    ? (btn.className = "calcButton wide")
    : (btn.className = "calcButton");
  btn.addEventListener("click", () => {
    checkNum(btn.innerText) || i == 17
      ? writeOnClick(btn.innerText)
      : checkOp(btn.innerText)
      ? nextNum()
      : i == 18
      ? calculate()
      : i == 0
      ? reset(btn)
      : i == 1
      ? negate(btn)
      : null;
  });
}
