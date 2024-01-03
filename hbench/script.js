const root = document.querySelector("#root");
const boxContainer = document.createElement("div");
boxContainer.className = "boxC";
root.appendChild(boxContainer);
let temp = [];
count = 0;
const total = 9;
const boxCreate = (num) => {
  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = i;
    boxContainer.appendChild(box);
    box.addEventListener("click", () => {
      console.log("lll")
    });
  }
};
const makeFlash = (num) => {
  let rand = Math.floor(Math.random() * num);
  let randBox = document.getElementById(`${rand}`);
  randBox.style.backgroundColor = "#fff";
  setTimeout(()=>{
      randBox.style.backgroundColor = "rgba(0, 0, 102, 0.5)";
  },500)
};
boxCreate(total);
      makeFlash(9);