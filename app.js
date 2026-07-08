///confirm js is connected
console.log("JavaScript Loaded");

//wait for dom to load
document.addEventListener('DOMContentLoaded', ()=>{
    //select button on page
    const addTaskBtn = document.querySelector(".submit-task-btn");
    //create array to store user tasks
    let currentTasks = [];
    
    addTaskBtn.addEventListener("click", () => {
        //announce button works
        console.log("Button clicked!");
        //read input from user
        const newTaskField = document.querySelector("#newTask").value;
        //log user input for debug
        console.log(newTaskField);

        //check if input is valid
        if(newTaskField != ""){
            //add to currentTasks array
            currentTasks.push(newTaskField);
            //empty user input field
            document.querySelector("#newTask").value = "";

            //create parent element variable
            const currentList = document.querySelector("#taskList");
            //create new tag for task
            const newTask = document.createElement("li");
            //add user input to tag
            newTask.textContent = newTaskField;
            //append new element to parent
            currentList.appendChild(newTask);            
        }
        else{
            alert("Please enter a task to add.");
        }

    });

});