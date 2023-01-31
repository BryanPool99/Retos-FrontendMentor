const id=document.getElementById("idAdvice");
const quote=document.getElementById("txtAdvice");
const btnGenerator=document.getElementById("btnGenerator");
const url="https://api.adviceslip.com/advice";
console.log(btnGenerator);
const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        for (const iterator in data) {
            id.innerHTML=data[iterator].id;
            quote.innerHTML=data[iterator].advice;
        }
        
    } catch (error) {
        console.log(error)
    }
}
btnGenerator.addEventListener("click",()=>{
    fetchData();
})