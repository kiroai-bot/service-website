let services=[]

fetch("services.json")

.then(res=>res.json())

.then(data=>{

services=data

showServices(data)

})

function showServices(data){

let container=document.getElementById("services-container")

container.innerHTML=""

data.forEach(service=>{

container.innerHTML+=`

<div class="card">

<h3>${service.name}</h3>

<p>${service.description}</p>

<p><b>${service.price}</b></p>

<a class="btn" href="https://wa.me/919999999999?text=I want ${service.name}">
Order on WhatsApp
</a>

</div>

`

})

}

document.getElementById("search").addEventListener("input",function(){

let value=this.value.toLowerCase()

let filtered=services.filter(s=>s.name.toLowerCase().includes(value))

showServices(filtered)

})

function suggestService(){

let text=document.getElementById("problem").value.toLowerCase()

let result="Please contact on WhatsApp"

if(text.includes("pipe")) result="Recommended: Plumbing"

if(text.includes("car")) result="Recommended: 4 Wheeler Repair"

if(text.includes("paint")) result="Recommended: Paint Work"

if(text.includes("tank")) result="Recommended: Water Tank Cleaning"

document.getElementById("result").innerText=result

}