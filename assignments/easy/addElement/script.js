let count=1;
document.getElementById("root").innerHTML=`
<div class="container flex">
<div>
<input type="text" id="text"> 
<button class="flex"> Enter</button>
</div>
<div id="boxCase" class="case flex"></div>
<button onclick="addElement()">Add</button>
</div>
`;
const addElement=()=>{
    let box=document.createElement("div");
    box.classList="box flex"
    box.innerText=count;
    document.getElementById("boxCase").appendChild(box);
    count++;
}