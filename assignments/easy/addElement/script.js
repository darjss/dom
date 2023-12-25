let count = 1;
document.getElementById("root").innerHTML = `
<div class="container flex">
<div>
<input type="text" id="num"> 
<button class="flex" onclick="addAnyElement()">Enter</button>
</div>
<div id="boxCase" class="case flex"></div>
<button onclick="addElement()">Add</button>
</div>
`;
const addElement = () => {
  let box = document.createElement("div");
  box.classList = "box flex";
  box.innerText = count;
  document.getElementById("boxCase").appendChild(box);
  let red=255-count*3;
  box.style.backgroundColor=`rgb(${red},160,122)`
  count++;
};
const addAnyElement=()=>{
    document.getElementById("boxCase").innerHTML=" ";
    num=Number(document.getElementById("num").value);
    for(let i=0; i<num; i++){
        addElement();
    }
    // count=1;

}