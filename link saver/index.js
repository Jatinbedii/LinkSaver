const inputle = document.getElementById("inputelement");
let myleads = [];
const btn = document.getElementById("saveinput");
const ulel = document.getElementById("unorderlis");

console.log(ulel);

btn.addEventListener("click", function(){
    myleads.push(inputle.value);
    renderleads();
    inputle.value = "";
})
function renderleads(){
let listItema = "";

for(let i=0; i< myleads.length; i++){
    listItema += `<li>
        <a href= '${myleads[i] }'target='_blank'> 
            ${myleads[i]} 
        </a>
    </li>` ;
}
ulel.innerHTML = listItema;
}