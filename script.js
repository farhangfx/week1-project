
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("togglebutton");
    btn.onclick = () => {
        document.body.classList.toggle("darkMode");
    };
});
    document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("toggle-menu");
    let navlink = document.getElementById("nav-link");

    btn.addEventListener("click", function () {
        navlink.classList.toggle("show");
    });
});


                