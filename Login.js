const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "mounika" && password === "Assignment") {
        alert("You have successfully logged in.");
        location.href = "http://127.0.0.1:5500/resume.html";
        
    } else {
        loginErrorMsg.style.opacity = 1;
        location.reload();
    }
})

window.history.forward();
function noBack()
{
    window.history.forward();
}
