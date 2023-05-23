document.addEventListener("DOMContentLoaded", function() {
    // Create a variable to hold the to-do list items
    var toDoList = [];
  
    // Function to add an item to the to-do list
    function addToDoItem(text) {
      var item = {
        text: text,
        completed: false // Initialize as not completed
      };
      toDoList.push(item);
    }
  
    // Function to display the to-do list in an HTML element
    function displayToDoList() {
      var listContainer = document.getElementById("todo-list");
      listContainer.innerHTML = ""; // Clear the list container
  
      for (var i = 0; i < toDoList.length; i++) {
        var item = toDoList[i];
        var itemClass = item.completed ? "completed" : ""; // Check if item is completed
  
        var listItem = document.createElement("li");
        listItem.textContent = item.text;
        listItem.className = itemClass;
  
        // Add event listener to toggle completion on click
        listItem.addEventListener("click", function() {
          item.completed = !item.completed; // Toggle completion
          displayToDoList(); // Update the display
        });
  
        listContainer.appendChild(listItem);
      }
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
  
    // Initial display of the to-do list
    displayToDoList();
  });
  