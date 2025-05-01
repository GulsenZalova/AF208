
let id = new URLSearchParams(window.location.search).get("id")
let container=document.querySelector(".container")




async function GetData(){
let result = await axios.get(`http://localhost:3000/products/${id}`)
ShowData(result.data)
}



function ShowData(data){
   container.innerHTML=`
   <div class="card" style="width: 18rem;">
   <img src=${data.image} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${data.title}</h5>
     <p class="card-text">${data.description}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
   
   
   
   
   `
}

GetData()