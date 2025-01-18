document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".login-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
});

document.getElementById("logout").addEventListener("click", function () {
    document.querySelector(".login-container").classList.remove("hidden");
    document.getElementById("dashboard").classList.add("hidden");
});
