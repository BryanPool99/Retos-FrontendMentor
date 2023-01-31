//script para el filtro por regiones
const btnsFilter=document.querySelectorAll(".dropdown-item");
const btnFilterText=document.querySelector(".dropdown-toggle")
const filtroRegion=(data)=>{
    btnsFilter.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btnFilterText.innerHTML=btn.innerHTML;
            searchInput.value="";
            if(btn.innerHTML==="All"){
                cards(data);
                toogleTheme();
            }
            else{
                const filterData = data.filter(item => item.region === btn.innerHTML);
                cards(filterData);
                toogleTheme();
            }
        })
    })
}
