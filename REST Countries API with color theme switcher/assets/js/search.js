const searchInput=document.getElementById("search");
const searchCountries=(data)=>{
    searchInput.addEventListener("input",async(e)=>{
        let value=e.target.value.toLowerCase();
        const searchCountry=data.filter(i=>{
            const nameI=i.name.common.toLowerCase();
            //aca se puede modificar el filtro de busqueda que desea (puede ser al comienzo o que solo este incluido lo que se escribe)
            if(nameI.startsWith(value)){
                return i;
            }
        })
        cards(searchCountry);
        toogleTheme();
    })
}
