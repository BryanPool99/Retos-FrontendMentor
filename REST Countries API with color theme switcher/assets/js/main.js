const url="https://restcountries.com/v3.1/all";
const section=document.querySelector(".row.section");
const btnSwitch=document.querySelector(".switch");
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  fetchData();
});
const fetchData = async () => {
  try {
      const res = await fetch(url);
      const data = await res.json();
      const dataValid = data.filter(country => country.region !== "Antarctic" && country.borders!==undefined);
      //console.log(dataValid);
      cards(dataValid);
      searchCountries(dataValid); // funcion de buscar paises con el input
      filtroRegion(dataValid); // activa filtros region
      
  } catch (error) {
      console.log(error)
  }
}
const cards=(data)=>{
  let elementos="";
  for (let [idx,item] of data.entries()) {
    elementos+=`
    <div class="card m-2 p-0 mb-4" aria-hidden="true" onclick="window.location.href='details.html?name=${item.name.common}'">
      <img src="${item.flags.svg}" class="card-img-top" alt="Bandera ${item.name.common}">
      <div class="card-body">
        <h5 class="card-title">
          <b class="col-12">${item.name.common}</b>
        </h5>
        <p class="card-text">
          <b class="col-12">Population:</b> ${item.population}<br>
          <b class="col-10">Region:</b> ${item.region}<br>
          <b class="col-8">Capital:</b> ${item.capital}<br>
        </p>
      </div>
    </div>
    `
    section.innerHTML = elementos;
  }
  toogleTheme();
}