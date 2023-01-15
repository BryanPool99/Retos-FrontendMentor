const priceBasic = document.querySelector(".Money-B");
const priceProfesional = document.querySelector(".Money-P");
const priceMaster = document.querySelector(".Money-M");
const btnAnual = document.getElementById("btnAnual");
const btnMensual = document.getElementById("btnMensual");

//const btnSwitch = document.getElementById("btn-switch");
btnMensual.addEventListener("click", () => {
    //console.log("apretastes boton para anual");
    priceBasic.innerHTML=199.99;
    priceProfesional.innerHTML=249.99;
    priceMaster.innerHTML=399.99;
    btnMensual.style.background="transparent";
    btnAnual.style.background="white";
});

btnAnual.addEventListener("click", () => {
    //console.log("apretastes boton para mes");
    priceBasic.innerHTML=19.99;
    priceProfesional.innerHTML=24.99;
    priceMaster.innerHTML=39.99;
    btnAnual.style.background="transparent";
    btnMensual.style.background="white";
});


