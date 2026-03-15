let services = JSON.parse(localStorage.getItem("services")) || [

{name:"Welding Works",desc:"All welding services"},
{name:"Plumbing Works",desc:"Pipe repair and fitting"},
{name:"Paint Works",desc:"All painting services"}

]

function render(){

let container=document.getElementById("services")

if(!container) return

container.innerHTML=""

services.forEach(s=>{

container.innerHTML+=`

<div class="card">

<h3>${s.name}</h3>

<p>${s.desc}</p>

<a class="btn" href="https://wa.me/919999999999?text=I want ${s.name}">
Order
</a>

</div>

`

})

}

render()

function addService(){

let name=document.getElementById("name").value
let desc=document.getElementById("desc").value

services.push({name,desc})

localStorage.setItem("services",JSON.stringify(services))

alert("Service Added")

location.reload()

}
