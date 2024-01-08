const root = document.querySelector("#root");
const text = document.createElement("h1");
root.appendChild(text);
let arr = [];
let order=""
let progress = 0;
let current = "";
const total = 9;
const boxCreate = (num) => {
  root.innerHTML = "";
  text.innerText = `Level: ${order.length+1}`;  
  root.appendChild(text);
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

      } else {
        endGame();
      }
  if (progress == order.length) {
           if (current==order) {
            text.innerText = `Level: ${order.length+1}`;
    random();
     flashOrder();
             current = "";
             progress = 0;
   } 
      }
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
  newGame.addEventListener("click", ()=>{
    boxCreate(total);
  })
}
const selectGame=()=>{
  let seqMem=document.createElement("div");
  seqMem.className="gameOpt";
  root.appendChild(seqMem);
  seqMem.innerHTML=`<svg width="128" height="100" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style="padding: 20px;"><title>Sequence Memory</title><rect width="58" height="58" rx="10" fill="currentcolor"></rect><rect x="70" width="58" height="58" rx="10" fill="currentcolor"></rect><rect y="70" width="58" height="58" rx="10" fill="currentcolor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z" fill="currentcolor"></path></svg>`
  let 
}
selectGame();