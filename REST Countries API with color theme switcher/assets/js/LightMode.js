function toogleTheme() {
    const card=document.querySelectorAll(".card");
    const iconMoon=document.querySelector(".icon-moon");
    const btnSwitch=document.querySelector(".switch");
    const header=document.querySelector("header");
    const main=document.querySelector("main");
    const iconSearch=document.querySelector(".icon-search");
    const input=document.querySelector(".container-input");
    const dropdown=document.querySelector(".dropdown>button");
    const dropdownMenu=document.querySelector(".dropdown-menu");
    const btnMenu=document.querySelector(".dropdown-menu button");
    btnSwitch.addEventListener("click",()=>{
        if(iconMoon.name=="moon"){
            iconMoon.name="moon-outline";
            console.log("ESTAS EN TEMA CLARO");
            document.body.classList.add("light");
            header.classList.add("light");
            btnSwitch.classList.add("light");
            main.classList.add("light");
            card.forEach((c)=>{
                c.classList.add("light");
            });
            iconSearch.classList.add("light");
            input.classList.add("light");
            dropdown.classList.add("light");
            dropdownMenu.classList.add("light");
            btnMenu.classList.add("light"); 
        }
        else{
            iconMoon.name="moon";
            console.log("ESTAS EN TEMA oscuro");
            document.body.classList.remove("light");
            header.classList.remove("light");
            btnSwitch.classList.remove("light");
            main.classList.remove("light");
            card.forEach((c)=>{
                c.classList.remove("light");
            });
            iconSearch.classList.remove("light");
            input.classList.remove("light");
            dropdown.classList.remove("light");
            dropdownMenu.classList.remove("light");
            btnMenu.classList.remove("light"); 
        }
    });
}