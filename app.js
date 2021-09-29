// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const firstName = document.getElementById('firstName');
const button = document.getElementById('generate');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
});