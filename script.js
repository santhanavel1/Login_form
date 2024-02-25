document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your login logic here, e.g., check credentials and navigate to another page
    if (username === "santhanam" && password === "12345678") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});