import toDos from "./ls.js";
const toDo = new toDos();
var toDoList = toDo.getToDoList();

var bod = document.getElementsByTagName('body')[0];

var title = document.createElement("h1");
bod.appendChild(title)

title.textContent = "To-Do's";
var contents = document.createElement("div");
contents.setAttribute("id", "div1")

function displayTasks(currentView){
    var contentUl = document.createElement("ul");
    contentUl.setAttribute("id", "contentUl")
    var newArray = []
    if (currentView == "Completed"){
        newArray = toDoList.filter(function (todo) {
            return todo.completed == true;
        });
    }
    else if (currentView == "Active"){
        newArray = toDoList.filter(function (todo) {
            return todo.completed == false;
        });
    }
    else {
        newArray = toDoList
    }

    newArray.sort(function(a,b){return a.date - b.date});

    for (const todo of newArray) {
        let contentLi = document.createElement("li");
        contentLi.setAttribute("class", "tasks");

        let contentP = document.createElement("p");
        contentP.textContent = todo.content;

        let contentButton = document.createElement("button");
        contentButton.setAttribute("id", "contentButton")
        if (todo.completed == true){
            contentButton.textContent = "☒"
            contentButton.addEventListener("click", function(){markTaskAsIncomplete(todo, currentView)});
        }
        else{
            contentButton.textContent = "ㅤ"
            contentButton.addEventListener("click", function(){markTaskAsComplete(todo, currentView)});
        }

        let removeButton = document.createElement("button");
        removeButton.setAttribute("id", "removeButton")
        removeButton.textContent = "X"
        removeButton.addEventListener("click", function(){removeTask(todo, currentView)});

        if (todo.completed == true){
            contentLi.setAttribute("id", "active");
        }
        contentLi.appendChild(contentButton);
        contentLi.appendChild(contentP);
        contentLi.appendChild(removeButton);
        contentUl.appendChild(contentLi);
    };

    var bottomLi = document.createElement('li');
    bottomLi.setAttribute("id", "bottomLi")
    var bottomP = document.createElement('p');
    console.log(toDoList)
    console.log(newArray)
    bottomP.textContent = `${newArray.length} tasks left`
    var bottomButtonAll = document.createElement("button");
    bottomButtonAll.addEventListener("click", function(){displayTasks("All")});
    bottomButtonAll.textContent = 'All'
    var bottomButtonCompleted = document.createElement("button");
    bottomButtonCompleted.addEventListener("click", function(){displayTasks("Completed")});
    bottomButtonCompleted.textContent = "Completed"
    var bottomButtonActive = document.createElement("button");
    bottomButtonActive.addEventListener("click", function(){displayTasks("Active")});
    bottomButtonActive.textContent = "Active"
    bottomLi.appendChild(bottomP);
    bottomLi.appendChild(bottomButtonAll);
    bottomLi.appendChild(bottomButtonActive);
    bottomLi.appendChild(bottomButtonCompleted);
    contentUl.appendChild(bottomLi);
    var oldUl = document.getElementById('contentUl');
    if (oldUl){
        oldUl.remove()
    }
    contents.appendChild(contentUl);
    bod.appendChild(contents);
}

function addTask(){
    var addTaskBox = document.getElementById("taskBox");
    if (addTaskBox){
        var newTodo = {
            id: Date.now(),
            content: addTaskBox.value,
            completed: false
        }
        toDoList.push(newTodo);
        displayTasks("All")
        addTaskBox.value = ""
    }
}

function removeTask(todo, currentView){
    let obj = toDoList.findIndex(t => t.id == todo.id);
    console.log(obj)
    toDoList.splice(obj, 1);
    console.log('Remove')
    if (currentView == "Completed"){
        displayTasks("Completed")
    }
    else if (currentView == "Active"){
        displayTasks("Active")
    }
    else {
        displayTasks("All")
    }
}

function markTaskAsComplete(todo, currentView){
    console.log('Yo')
    let obj = toDoList.find(t => t.id == todo.id);
    if(obj){
        obj.completed = true;
    }
    if (currentView == "Completed"){
        displayTasks("Completed")
    }
    else if (currentView == "Active"){
        displayTasks("Active")
    }
    else {
        displayTasks("All")
    }
}

function markTaskAsIncomplete(todo, currentView){
    let obj = toDoList.find(t => t.id == todo.id);
    if(obj){
        obj.completed = false;
    }
    if (currentView == "Completed"){
        displayTasks("Completed")
    }
    else if (currentView == "Active"){
        displayTasks("Active")
    }
    else {
        displayTasks("All")
    }
}

displayTasks("All")

var addTaskDiv = document.createElement("div");
addTaskDiv.setAttribute("id", "div2")
var addTaskBox = document.createElement("input");
addTaskBox.setAttribute("type", "text");
addTaskBox.setAttribute("id", "taskBox");
var addTaskButton = document.createElement("button");
addTaskButton.textContent = "+";
addTaskButton.addEventListener("click", addTask);
addTaskDiv.appendChild(addTaskBox);
addTaskDiv.appendChild(addTaskButton);
bod.appendChild(addTaskDiv);