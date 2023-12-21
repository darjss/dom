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
  text.innerText += a.innerText;
};
const reset = () => {
  text.innerText = "";
};
const checkNum = (num) => {
  let result = false;
  let n = Number(num);
  for (let i = 0; i < 10; i++) {
    n === i ? (result = true) : null;
  }
  console.log(result);
  return result;
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
    checkNum(btn.innerText)
      ? writeOnClick(btn)
      : i == 18
      ? calculate(btn)
      : i == 0
      ? reset(btn)
      : i == 1
      ? negate(btn)
      : null;
  });
}
