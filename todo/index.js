document.addEventListener("DOMContentLoaded", function() {
// Create a variable to hold the to-do list items
var toDoList = [];

// Function to add an item to the to-do list
function addToDoItem(item) {
    toDoList.push(item);
}

// Function to display the to-do list in an HTML element
function displayToDoList() {
    var listContainer = document.getElementById("todo-list");
    var listHTML = "";

    for (var i = 0; i < toDoList.length; i++) {
        listHTML += "<li>" + toDoList[i] + "</li>";
    }

       listContainer.innerHTML = listHTML;
}

// Function to handle adding a new item to the to-do list
function addItem() {
    var newItem = document.getElementById("todo-item-input").value;
    addToDoItem(newItem);
    document.getElementById("todo-item-input").value = "";
    displayToDoList();
}

// Add event listener to the form submission
document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    addItem(); // Call the addItem function to handle the form submission
  });
});