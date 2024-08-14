let button = document.getElementById("menu-button")
let navmenu = document.getElementById("nav-menu")
navmenu.classList.toggle("visible")
button.addEventListener("focus",()=>{
    button.classList.toggle("transition");
    console.log(button.classList)
    navmenu.classList.toggle("visible")
    
})