const root = document.querySelector("#root");
const text = document.createElement("h1");
root.appendChild(text);
let arr = [];
let order=""
text.innerText = `Level: ${order.length+1}`;
let progress = 0;
let current = "";
const total = 9;
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
    box.addEventListener("click", (e) => {
      check(e.target.id);
    });
  }
  flashOrder()
};
const makeFlash = (num) => {
  let randBox = document.getElementById(`${num}`);
  randBox.className = "box white";
  setInterval(() => {
    randBox.className = "box";
  }, 1000);
  console.log(num);
};
const flashOrder = () => {
  for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
      makeFlash(order[i]);
    }, 1000 * (i + 1));
  }
  console.log(order);
};
const random = () => {
  let rand = Math.floor(Math.random() * 9);
  order+=Number(rand);
};
const check = (id) => {
  current += id;
      if (id == order[progress]) {
    progress++;
    text.innerText = `Level: ${order.length+1}`;
      } else {
        endGame();
      }
  if (progress == order.length) {
           if (current==order) {
    random();
     flashOrder();
             current = "";
             progress = 0;
   } 
      }

  //  if(id == order[order.length-1]) {
  //     text.innerText = "wrong";
  // }

  console.log("count", progress);
    console.log(current)
};
const endGame = () => {
  root.innerHTML = "";
  text.innerText = `You reached level ${order.length}`;
  root.appendChild(text);
  newGame= document.createElement("div");
  newGame.className = "newButton";
  newGame.innerText = "New Game";
  root.appendChild(newGame);
}
boxCreate(total);
