

async function GetDataS(){
  let result=await  axios.get("http://localhost:3000/products")
ShowDatas(result.data)
}


function ShowDatas(datas){
   let listGroup=document.querySelector(".list-group")
   datas.forEach(data => {
    listGroup.innerHTML+=`<li class="list-group-item">${data.title}  <a href="detail.html?id=${data.id}" class="btn btn-primary">Info</a> <button data-id=${data.id} class="btn btn-danger delete">Delete</button></li>`



    let deleteBtns=document.querySelectorAll(".delete")
    deleteBtns.forEach(deleteBtn=>{
        deleteBtn.addEventListener("click", async ()=>{
            id=deleteBtn.getAttribute("data-id")
            await  axios.delete(`http://localhost:3000/products/${id}`)
            console.log(deleted)
        })
    })
   });
   
}


GetDataS()