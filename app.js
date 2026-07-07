console.log("JavaScript Loaded");

//wait for dom to load
document.addEventListener('DOMContentLoaded', ()=>{
    //select button on page
    const addTaskBtn = document.querySelector(".submit-task-btn");

    addTaskBtn.addEventListener("click", () => {
        console.log("Button clicked!");
    });
});