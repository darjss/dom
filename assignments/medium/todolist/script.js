let root = document.querySelector("#root");
let boardCont = document.createElement("div");
boardCont.className = "boardCont";
root.appendChild(boardCont);
let arrName = ["To Do", "In progress", "Stuck", "Done"];
const addCard = () => {
  let form = document.createElement("div");
  form.className = "form";
  root.appendChild(form);
  formTitle = document.createElement("h1");
  formTitle.innerText = "Add Task";
  form.appendChild(formTitle);
  taskTitle = document.createElement("p");
  taskTitle.innerText = "Title";
  form.appendChild(taskTitle);
  form.appendChild(document.createElement("input"));
  taskDesc = document.createElement("p");
  taskDesc.innerText = "Description";
  form.appendChild(taskDesc);
  form.appendChild(document.createElement("input"));
  taskStatus = document.createElement("p");
  taskStatus.innerText = "Status";
  statusOptions = document.createElement("select");
  form.appendChild(statusOptions);
  for(let i=0; i<4; i++){
      statusOpt = document.createElement("options");
      statusOpt.innerText = arrName[i];
    statusOptions.appendChild(statusOpt);
  }
};
const createBoards = () => {
  for (let i = 0; i < 4; i++) {
    let taskBoard = document.createElement("div");
    taskBoard.className = "board";
    boardCont.appendChild(taskBoard);
    let titleText = document.createElement("h2");
    titleText.innerText = arrName[i];
    taskBoard.appendChild(titleText);
    let taskCont = document.createElement("div");
    taskBoard.appendChild(taskCont);
    let addbtn = document.createElement("button");
    addbtn.className = "add";
    addbtn.innerText = "+ Add card";
    taskBoard.appendChild(addbtn);
    addbtn.addEventListener("click", addCard);
  }
};
createBoards();
