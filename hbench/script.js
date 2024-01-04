const root = document.querySelector("#root");
let temp = [2, 4, 7, 8];
let count = 0;
const total = 9;
let intervalId;
const boxCreate = (num) => {
  const boxContainer = document.createElement("div");
  boxContainer.className = "boxC";
  root.appendChild(boxContainer);
  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = i;
    boxContainer.appendChild(box);
    box.addEventListener("click", () => {
      makeFlash(1);
    });
  }
  // const test = () => {
  //   for (let j = 0; j < temp.length; j++) {
     
  //   }
    // clearInterval(intervalId);
  // };
  //  setInterval(() => {
  //    makeFlash(1);
  //  }, 1000);
};
const makeFlash = (arr) => {
  // let rand = Math.floor(Math.random() * num);
  // temp.push(rand);
  for(let i=0; i<arr.length)
  let randBox = document.getElementById(`${arr[i]}`);
  randBox.className = "box white";
  setInterval(() => {
    randBox.className = "box";
    // makeFlash(total);
  }, 1000);

  count++;
  // clearTimeout(id);
  console.log(count);
};
boxCreate(total);
