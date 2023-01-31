setTimeout(()=>{
    const btnSwitch=document.querySelector(".switch");
    const btnBack=document.querySelectorAll(".btnBack");
    const iconMoon=document.querySelector(".icon-moon");
    const header=document.querySelector("header");
    const main=document.querySelector("main");
    const card=document.querySelectorAll(".card");
    const detailCountryText=document.querySelector("main section");
    btnSwitch.addEventListener("click",()=>{
        console.log("di click en switch");
        if(iconMoon.name=="moon"){
            iconMoon.name="moon-outline";
        }
        else{
            iconMoon.name="moon";
        }
        document.body.classList.toggle("light");
        header.classList.toggle("light");
        btnSwitch.classList.toggle("light");
        main.classList.toggle("light");
        card.forEach((c)=>{
            c.classList.toggle("light");
        });
        btnBack.forEach((b)=>{
            b.classList.toggle("light");
        })
        detailCountryText.classList.toggle("light");
    });
},1000)