document.addEventListener("DOMContentLoaded", function () {
 
// get data from the form id
const form = document.getElementById("userForm"); 

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // Get information from the form
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);

    // save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    // Display in separate divs
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAge").textContent = 
     isNaN(age) ? "" : age; // terniary operator to check if age is a number

      //Check the age status

    if (age>=18){
       document.getElementById("ageStatus").textContent = 
       "You can access adult content."
    } else {
       document.getElementById("ageStatus").textContent =
       "You are too young for adult content."
    }

    document.getElementById("ageMonths").textContent =
   isNaN(age) ? "" : `Age in months: ${age * 12}`; // checks if its a number to multiply it


});
   // Load data after refresh
window.addEventListener("load", function () {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");

     if (savedName) {
        document.getElementById("displayName").textContent = savedName;
    }

    if (savedAge) {
        document.getElementById("displayAge").textContent = savedAge;
    }
});

});
