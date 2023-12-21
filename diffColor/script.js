//level score
let root = document.querySelector("#root");
let difficulty=document.createElement("div");
difficulty.className="diff"
root.appendChild(difficulty);
let easy = document.createElement("button");
easy.innerText = "easy";
difficulty.appendChild(easy);
easy.addEventListener("click", () => {
  createBox(9,50);
});
let medium = document.createElement("button");
medium.innerText = "medium";
difficulty.appendChild(medium);
medium.addEventListener("click", () => {
  createBox(16, 30);
});
let hard = document.createElement("button");
hard.innerText = "hard";
difficulty.appendChild(hard);
hard.addEventListener("click", () => {
  createBox(25, 10);
});
let winText=document.createElement("p");
// winText.innerText="wow"
difficulty.appendChild(winText);
const createBox = (len, dif) => {
    const boxCont = document.createElement("div");
    root.innerHTML=" ";
    root.appendChild(difficulty);
    boxCont.className = "boxContainer";
    root.appendChild(boxCont);
    let calc=Math.sqrt(len)*100+100;
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    boxCont.style.width=`${calc}px`;
    let rand = Math.floor(Math.random() * len+1);
    for (let i = 0; i < len; i++) {
        let box = document.createElement("div");
        box.className = "box";
        boxCont.append(box);
        let index=document.createElement("p");
        index.className="text";
        index.innerText=i;
        box.appendChild(index);
        setRandomColor(i,dif,rand, red, blue, green,box);
        checkDiffBox(box,rand);
    }
};
const setRandomColor=(index, dif,random,r, g,b, el)=>{
    if (r > dif) {
        ranColor = r - dif;
    } else {
        ranColor = r + dif;
    }
        index==random ? 
        el.style.backgroundColor = `rgb(${ranColor}, ${g}, ${b})`:
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
const checkDiffBox=(a,ran)=>{
    a.addEventListener("click", (e)=>{
        let num=0;
        a.innerHTML.length==21 ?
        num=a.innerHTML[16]
        :
        num=a.innerHTML[16]+a.innerHTML[17]
        num == ran
          ? (winText.innerText = "You have won")
          : (winText.innerText = "You have lost");
          // console.log(num);
          // console.log(ran);
          // console.log(a.style.backgroundColor);
    });
}