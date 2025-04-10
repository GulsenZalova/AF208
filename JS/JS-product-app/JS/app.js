import products from "./data.js"

console.log("salam")

let row = document.querySelector(".row")
let title = document.querySelector("#title")
let desc = document.querySelector("#desc")
let price = document.querySelector("#price")
let category = document.querySelector("#category")
let image = document.querySelector("#image")
let addForm = document.querySelector("#add-form")
let overlay = document.querySelector(".overlay")
let edit = document.querySelector(".edit")
let cancel = document.querySelector(".cancel")
let categoryFilter = document.querySelector("#category-filter")
let multiFilter=document.querySelector("#multi-filter")
document.addEventListener("DOMContentLoaded", () => {
    let StorageProducts = JSON.parse(localStorage.getItem("products")) || products
    // console.log( typeof StorageProducts)
    GetProducts(StorageProducts)
})



addForm.addEventListener("submit", (e) => {
    e.preventDefault()


    if (category.value.trim() == "" || title.value.trim() == "" || image.value.trim() == "" || image.value.trim() == "" || desc.value.trim() == "" || price.value.trim() == "") {
        Swal.fire({
            icon: `error`,
            title: "Oops...",
            text: "Hansisa input bosdur !!!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {

        console.log(category.value)
        let newProduct = {
            id: products.length + 1,
            title: title.value,
            description: desc.value,
            price: price.value,
            category: category.value,
            image: image.value
        }

        products.push(newProduct)
        localStorage.setItem("products", JSON.stringify(products))
        GetProducts(products)
        Reset()
        Swal.fire({
            icon: `success`,
            title: "Elave olundu",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }



})






function GetProducts(products) {
    row.innerHTML = ""
    products.forEach(product => {

        row.innerHTML += `
              <div class="col">
           <div class="card" style="width: 18rem;">
               <img src=${product.image} class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${product.title.slice(0, 15)}...</h5>
                 <p class="card-text">${product.description.slice(0, 50)}...</p>
                  <p class="card-text">${product.category}</p>
                   <p class="card-text">${product.price}</p>
                 <button data-id=${product.id} class="btn btn-danger btn-delete"><i class="fa-solid fa-trash"></i></button>
                 <a class="btn btn-primary" href=detail.html?id=${product.id}><i class="fa-solid fa-circle-info"></i></a>
                 <button data-id=${product.id} class="btn btn-warning btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
               </div>
             </div>
       </div>



    `

        let deleteBtns = document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                let id = deleteBtn.getAttribute("data-id")
                DeleteProduct(id)
            })
        })


        let editBtns = document.querySelectorAll(".btn-edit")

        editBtns.forEach(editBtn => {
            editBtn.addEventListener("click", () => {
                let id = editBtn.getAttribute("data-id")
                EditProducts(id)
            })
        })



    })



}




function DeleteProduct(id) {
    //  let deleted=   window.confirm("silmek istediyinizden eminmisiniz?")
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            //   localdan getirib silmeliyem
            let products = JSON.parse(localStorage.getItem("products"))
            let index = products.findIndex(x => x.id == id)
            products.splice(index, 1)
            localStorage.setItem("products", JSON.stringify(products))
            GetProducts(products)

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}



function EditProducts(id) {
    overlay.style.display = "block"
    edit.style.display = "block"
    let editTitle = document.querySelector("#edit-title")
    let editdesc = document.querySelector("#edit-desc")
    let editprice = document.querySelector("#edit-price")
    let editcategory = document.querySelector("#edit-category")
    let editimage = document.querySelector("#edit-image")
    let editForm = document.querySelector("#edit-form")
    let finded = products.find((x => x.id == id))

    editTitle.value = finded.title
    editdesc.value = finded.description
    editprice.value = finded.price
    editimage.value = finded.image
    editcategory.value = finded.category

    console.log(finded)


    editForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let updatedTitle = editTitle.value
        let updateddesc = editdesc.value
        let updatedprice = editprice.value
        let updatedimage = editimage.value
        let updatedcategory = editcategory.value

        // array hemin elementi tapmaliyam
        // evezlemeler etmeliytem
        // ekranda gorunmelidir
        // locala qeyd olunmalideie
        // edit form itmelidir


        let elementIndex = products.findIndex(x => x.id == id)
        let updatedProduct = products[elementIndex]
        updatedProduct.title = updatedTitle
        updatedProduct.description = updateddesc
        updatedProduct.image = updatedimage
        updatedProduct.price = updatedprice
        updatedProduct.category = updatedcategory
        GetProducts(products)
        edit.style.display = "none"
        overlay.style.display = "none"
        localStorage.setItem("products", JSON.stringify(products))
    })

}


cancel.addEventListener("click", () => {
    overlay.style.display = "none"
    edit.style.display = "none"
})


function Reset() {
    title.value = ""
    desc.value = ""
    price.value = ""
    image.value = ""
    category.value = ""
}




categoryFilter.addEventListener("change", () => {
    let searchString = categoryFilter.value
    let filteredProducts
    switch (searchString) {
        case "women's clothing":
            filteredProducts = [...products].filter(x => x.category == searchString)
            break;
        case "electronics":
            filteredProducts = [...products].filter(x => x.category == searchString)
            break;
        case "jewelery":
            filteredProducts = [...products].filter(x => x.category == searchString)
            break;
        case "men's clothing":
            filteredProducts = [...products].filter(x => x.category == searchString)
            break;
        case "all":
            filteredProducts = [...products]
            break;
        default:
            break;
    }

    GetProducts(filteredProducts)
})



multiFilter.addEventListener("change",()=>{
    let searchString = multiFilter.value
    let filteredProducts
    switch (searchString) {
        case "low":
            filteredProducts = [...products].sort((a,b)=>a.price-b.price)
            break;
        case "high":
            filteredProducts = [...products].sort((a,b)=>b.price-a.price)
            break;
        case "az":
            filteredProducts = [...products].sort((a,b)=>a.title.localeCompare(b.title))
            break;
        case "za":
            filteredProducts =  [...products].sort((a,b)=>b.title.localeCompare(a.title))
            break;
        case "all":
            filteredProducts = [...products]
            break;
        default:
            break;
    }

    GetProducts(filteredProducts)

})





let nums=[1,2,3,4,5]

let numCopy=[...nums]




nums.push(6)
console.log(nums)
console.log(numCopy)