let root = document.querySelector("#root");
let boardCont = document.createElement("div");
boardCont.className = "boardCont";
root.appendChild(boardCont);
let arrName = ["To Do", "In progress", "Stuck", "Done"];
let priorityArr = ["Low", "Medium", "High"];
let taskArr = [];
let count = 2;
let taskCont;
let dragged;
let addTask;
let input;
const addCard = (title, desc, status, priority) => {
  let form = document.createElement("div");
  form.className = "form";
  root.appendChild(form);
  formTitle = document.createElement("h1");
  formTitle.innerText = "Add Task";
  form.appendChild(formTitle);
  taskTitle = document.createElement("p");
  taskTitle.innerText = "Title";
  form.appendChild(taskTitle);
  let titleInput = document.createElement("input");
  titleInput.value = title;
  form.appendChild(titleInput);
  let taskDesc = document.createElement("p");
  taskDesc.innerText = "Description";
  form.appendChild(taskDesc);
  let descInput = document.createElement("input");
  descInput.value = desc;
  form.appendChild(descInput);
  taskStatus = document.createElement("p");
  taskStatus.innerText = "Status";
  form.appendChild(taskStatus);
  let statusOptions = document.createElement("select");
  for (let i = 0; i < 4; i++) {
    let statusOpt = document.createElement("option");
    statusOpt.innerText = arrName[i];
    statusOptions.appendChild(statusOpt);
  }
  statusOptions.value = status;
  form.appendChild(statusOptions);
  taskPriority = document.createElement("p");
  taskPriority.innerText = "Priority";
  form.appendChild(taskPriority);
  let priorityOptions = document.createElement("select");
  for (let i = 0; i < 3; i++) {
    let priorityOpt = document.createElement("option");
    priorityOpt.innerText = priorityArr[i];
    priorityOptions.appendChild(priorityOpt);
    priorityOpt.value = i;
  }
  form.appendChild(priorityOptions);
  addTask = document.createElement("button");
  addTask.innerText = "Add Task";
  addTask.className = "addButton";
  form.appendChild(addTask);
  addTask.addEventListener("click", () => {
    getInfo(
      form,
      titleInput.value,
      descInput.value,
      statusOptions.value,
      priorityOptions.value
    );
    input = {
      title: titleInput.value,
      description: descInput.value,
      status: statusOptions.value,
      priority: priorityOptions.value,
    };
  });
};

const getInfo = (form, title, desc, status, priority) => {
  let task = {
    taskId: count,
    title: title,
    description: desc,
    status: status,
    priority: priority,
  };
  taskArr.push(task);
  count++;

  console.log(taskArr);
  form.style.display = "none";
  render();
};
const createBoards = () => {
  for (let i = 0; i < 4; i++) {
    let taskBoard = document.createElement("div");
    taskBoard.className = "board";
    boardCont.appendChild(taskBoard);
    let titleText = document.createElement("h2");
    titleText.innerText = arrName[i];
    taskBoard.appendChild(titleText);
    taskCont = document.createElement("div");
    taskCont.className = "taskContainer";
    taskCont.id = arrName[i];
    taskBoard.appendChild(taskCont);

    taskBoard.addEventListener(
      "dragover",
      (e) => {
        e.preventDefault();
      },
      false
    );
    taskBoard.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.appendChild(dragged);
    });

    let addbtn = document.createElement("button");
    addbtn.className = "add";
    addbtn.innerText = "+ Add card";
    taskBoard.appendChild(addbtn);
    addbtn.addEventListener("click", () => {
      addCard(" ", " ", "To Do", "Low");
    });
  }
};
createBoards();
const displayTasks = (id, title, desc, status, priority) => {
  task = document.createElement("div");
  task.className = "task";
  task.draggable = "true";
  task.addEventListener("dragstart", (e) => {
    dragged = e.target;
  });
  document.getElementById(`${status}`).appendChild(task);
  titleTask = document.createElement("h2");
  titleTask.innerText = title;
  task.appendChild(titleTask);
  descTask = document.createElement("p");
  descTask.innerText = desc;
  task.appendChild(descTask);
  prior = document.createElement("div");
  priority == 0
    ? (prior.innerText = "Low")
    : priority == 1
    ? (prior.innerText = "Medium")
    : priority == 2
    ? (prior.innerText = "High")
    : (prior.innerText = "Low");
  task.appendChild(prior);
  doneButton = document.createElement("button");
  doneButton.innerText = "✅";
  doneButton.className = "but";
  doneButton.addEventListener("click", () => {
    let index = taskArr.findIndex((a) => a.id === id);
    
    console.log(index);
    render();
  });
  delButton = document.createElement("button");
  delButton.innerText = "❌";
  delButton.className = "but";
  delButton.addEventListener("click", () => {
    let index = taskArr.findIndex((a) => a.id === id);
    console.log(index);
    console.log(taskArr[index])
    taskArr.splice(index, 1);

    render();
  });
  editButton = document.createElement("button");
  editButton.innerText = "✏️";
  editButton.className = "but";
  editButton.addEventListener("click", () => {
    let index = taskArr.findIndex((a) => a.id === id);
    taskArr.splice(index, 1);
    addCard(title, desc, status, priority);
    edit(index);
  });
  butCont = document.createElement("div");
  butCont.className = "butCont";
  task.appendChild(butCont);
  butCont.appendChild(doneButton);
  butCont.appendChild(delButton);
  butCont.appendChild(editButton);
};
const render = () => {
  boardCont.innerHTML = "";
  createBoards();
  taskArr.sort((a, b) => {
    return b.priority - a.priority;
  });
  taskArr.map((task, i) => {
    displayTasks(
      task.taskId,
      task.title,
      task.description,
      task.status,
      task.priority
    );
  });
};
const edit=(i)=>{
  addTask.innerText="Edit task";
  addTask.addEventListener("click", ()=>{
    return{
      ...taskArr[i],
      title: input.title,
      description: input.description,
      status: input.status,
      priority: input.priority
    }
  })
}