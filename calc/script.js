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
const createBox = (len, dif) => {
    const boxCont = document.createElement("div");
    root.innerHTML=" ";
    root.appendChild(difficulty);
    boxCont.className = "boxContainer";
    root.appendChild(boxCont);
    let calc=Math.sqrt(len)*100+100
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
        checkDiffBox(box);
    }
};
const setRandomColor=(index, dif,random,r, g,b, el)=>{
    if (r > dif) {
        ranColor = r - dif;
    } else {
        ranColor = r + dif;
    }
    // console.log(red, blue, green);
        index==random ? 
        el.style.backgroundColor = `rgb(${ranColor}, ${g}, ${b})`:
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
const checkDiffBox=(a)=>{
    a.addEventListener("click", (e)=>{
        let color=e.target.style.backgroundColor;
        console.log(color);
        console.log(a.innerHTML);
    })
}