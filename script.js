document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("menu-button");
    let navmenu = document.getElementById("nav-menu");
    // Ensure the menu is initially hidden
    navmenu.classList.add("visible");
    button.addEventListener("click", function() {
        button.classList.toggle("transition");
        navmenu.classList.toggle("visible");
    });
});