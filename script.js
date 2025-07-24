// ====== Inisialisasi Elemen ======
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
var addButton = document.getElementById("add-button");

// Tambahkan event listener setelah semua elemen diambil
addButton.addEventListener("click", addToDoItem);


function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}


function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoItem.addEventListener("dblclick", toggleToDoItemState);
    toDoList.appendChild(toDoItem);
}

function toggleToDoItemState() {
    this.classList.toggle("completed");
}


function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems[0].remove();
    }
}


function emptyList() {
    while (toDoList.children.length > 0) {
        toDoList.children[0].remove();
    }
}


function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children[i];

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("masuk kesini ya");
}


function loadList() {
    var data = localStorage.getItem("toDos");
    if (data !== null) {
        var toDos = JSON.parse(data);

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);

var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};


loadList();
