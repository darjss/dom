const root = document.querySelector("#root");
const text = document.createElement("p");

root.appendChild(text);
let arr = [];
let count = 0;
text.innerText = count;
const total = 9;
let intervalId;
const boxCreate = (num) => {
  random();
  const boxContainer = document.createElement("div");
  boxContainer.className = "boxC";
  root.appendChild(boxContainer);
  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = i;
    boxContainer.appendChild(box);
    box.addEventListener("click", check);
  }
  makeFlash(arr[0]);
};
const makeFlash = (num) => {
  let randBox = document.getElementById(`${num}`);
  randBox.className = "box white";
  setInterval(() => {
    randBox.className = "box";
  }, 1000);

  console.log(count);
};
const flashOrder = (arr) => {
  random();
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      makeFlash(arr[i]);
    }, 1000 * (i + 1));
  }
};
const random = () => {
  let rand = Math.floor(Math.random() * 9);
  arr.push(rand);
};
const check = (id) => {
  id.target.id == arr[count] ? flashOrder(arr) : null;
  console.log(arr);
  count++;
  text.innerText = count;
  
};
boxCreate(total);
