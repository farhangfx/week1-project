
document.addEventListener("DOMContentLoaded", function () {
    let themeBtn = document.getElementById("togglebutton");

themeBtn.onclick = function () {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
};

});
    document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("toggle-menu");
    let navlink = document.getElementById("nav-link");

    btn.addEventListener("click", function () {
        navlink.classList.toggle("show");
    });
});


                