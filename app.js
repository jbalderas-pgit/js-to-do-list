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
        //add to currentTasks array
        currentTasks.push(newTaskField);
        //empty user input field
        document.querySelector("#newTask").value = "";
    });

});