function resetData() {
    // finds an id called results and hides it before data is entered
    document.getElementById("results").classList.add("hidden");

    // Clear form inputs only so that they cant display on the input area
    document.getElementById("userForm").reset();

}

function displayUserData(name, age) { /* function that has all the data
    (used on the on submit and load event to avod repetition ) */

    // Show results section when data is input after submission
    document.getElementById("results").classList.remove("hidden");

    // Name/Greeting
    document.getElementById("displayName").textContent =
        "Hello, " + name;

    // Age
    document.getElementById("displayAge").textContent =
        "You are " + age + " years old";

     // Age in months
    document.getElementById("ageMonths").textContent =
        "Age in months: " + (age * 12);

    // Age status
    if (age >= 18) {
        document.getElementById("ageStatus").textContent =
            "You can access adult content.";
    } else {
        document.getElementById("ageStatus").textContent =
            "You are too young for adult content.";
    }


    // Motivational quotes
    const motivation = document.getElementById("quotes");

    // Prevent duplicates
    motivation.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        motivation.innerHTML += "Keep pushing forward!<br>";
    }
}

document.addEventListener("DOMContentLoaded", function () { /* code shoud not be run
 till html page fully loads*/
    

    const form = document.getElementById("userForm"); // find form in html and store it in variable

    // Load saved data after refresh
    const savedName = localStorage.getItem("name");
    const savedAge = Number(localStorage.getItem("age")); // converts age to number

    if (savedName && savedAge) {
        displayUserData(savedName, savedAge); // if the data exists in storage display it
    }

    // Form submission
    form.addEventListener("submit", function (event) { // listen for form submission
        event.preventDefault(); // stops page from refreshing(avoid data loss befor submission)
   
        // fetch data from html by id
        const name = document.getElementById("name").value;
        const age = Number(document.getElementById("age").value);

        // Save data
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);

        // Display data
        displayUserData(name, age);
    });

});