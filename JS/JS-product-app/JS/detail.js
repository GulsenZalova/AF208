import products from "./data.js"
let id= new  URLSearchParams(window.location.search).get("id")

let detailProduct= products.find(x=>x.id==id)
let container=document.querySelector(".container")
container.innerHTML=`

 <div class="card mb-3">
        <img src="${detailProduct.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detailProduct.title}</h5>
          <p class="card-text">${detailProduct.description}</p>
          <p class="card-text"><small class="text-body-secondary">${detailProduct.price}</p>
           <p class="card-text"><small class="text-body-secondary">${detailProduct.category}</p>
        </div>
      </div>


`
console.log(detailProduct)