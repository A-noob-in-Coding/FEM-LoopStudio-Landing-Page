let button = document.getElementById("menu-button")
let nav = document.getElementById("nav-menu")
button.addEventListener("focus",()=>{
    console.log("clicked")
        nav.classList.toggle("visible")
})