const url="https://restcountries.com/v3.1/all";
const query = new URLSearchParams(window.location.search);
const params = query.get('name');
document.addEventListener("DOMContentLoaded", function(event) {
   fetchData()
});
const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const dataValid = data.filter(country => country.region !== "Antarctic" && country.borders!==undefined);
        const dataDetails = data.filter(country => country.name.common === params);
        HashCode(dataValid);
        cards(dataDetails);
    } catch (error) {
        console.log(error)
    }
}
let CodeName = new Map();

const HashCode = (data) => {
data.forEach(element => {
CodeName.set(element.cca3, element.name.common);
});
};
function getCountryName(code) {
  return CodeName.get(code);
}
const section=document.querySelector("section.row");
const cards=(data)=>{
    let elementos="";
    for (let [idx,item] of data.entries()) {
      //para el nombre nativo que tnega cualquier key dentro y solo bsuque el common(noombre nativo del pais)
      let nativeName = item.name.nativeName;
      let common = null;
      for (let key in nativeName) {
        if (nativeName[key].common) {
          common = nativeName[key].common;
          break;
        }
      }
      //para la moneda que tenga cualquier key con tal de que me meustre el name(nombre de la moneda)
      let currency=item.currencies;
      let name=null;
      for (let key in currency) {
        if (currency[key].name) {
          name= currency[key].name;
          break;
        }
      }
      //para los lenguajes que tiene dicho pais
      let languages=item.languages;
      let language=[];
      for (let key in languages) {
        if (languages[key]) {
          language.push(languages[key]);
        }
      }
      const borderC=document.querySelectorAll(".borderCountry");
      let borders=item.borders;
      let border="";
      borders.forEach(e => {
        console.log(getCountryName(e));
        border+=`<a href="details.html?name=${getCountryName(e)}" class="btn btnBack m-1">${getCountryName(e)}</a>`;
      });
      borderC.innerHTML=border;
      elementos+=`
        <div class="col col-sm-10 col-md-6 col-lg-5  me-lg-5">
              <img src="${item.flags.svg}" class="img-fluid" alt="img ${item.name.common}">
            </div>
            <div class="col col-sm-10 col-md-6 col-lg-6 mt-4 mt-lg-0"">
              <h2 class="fw-bold">${item.name.common}</h2>
              <div class="row">
                <div class="col-12 mb-4 mt-3 col-sm-6">
                <p>
                  <b>Native Name:</b>
                  ${common}
                </p>
                <p>
                  <b>Population:</b>
                  ${item.population}
                </p>
                <p>
                  <b>Region:</b>
                  ${item.region}
                </p>
                <p>
                  <b>Sub Region:</b>
                  ${item.subregion}
                </p>
                <p>
                  <b>Capital:</b>
                  ${item.capital}
                </p>
                </div>
                <div class="col-12 mb-4 mt-sm-3 col-sm-6">
                  <p>
                    <b>Top Level Domain:</b>
                    ${item.tld[0]}
                  </p>
                  <p>
                    <b>Currencies:</b>
                    ${name}
                  </p>
                  <p>
                    <b>Languages:</b>
                    ${language}
                  </p>
                </div>
              </div>
              <div class="col d-md-block d-lg-flex align-items-center">
                <b class="me-lg-3">Border Countries:</b>
                <div class="col d-flex  align-items-center flex-wrap mb-2 mb-lg-0  borderCountry">
                ${border}
                </div>
              </div>
            </div>
      `
      section.innerHTML = elementos;
    }
  }