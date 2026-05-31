const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // Get information from the form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    // show message immediately
    document.getElementById("greeting").textContent =
        `Welcome, ${name}!`;
});
   // Load data after refresh
window.addEventListener("load", function () {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");

    if (savedName) {
        document.getElementById("greeting").textContent =
            `Welcome back, ${savedName}!`;
    }
});