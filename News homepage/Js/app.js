const btnMenu=document.querySelector(".btn-menu");
const container=document.querySelector(".container");
const menu=document.querySelector(".menu");
btnMenu.addEventListener("click",()=>{
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
    container.classList.toggle("active")
})
