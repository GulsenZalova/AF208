import React from 'react'

function Form() {
   function SayHello(name) {
    alert(`salam ${name}`)
   }

   function handleChange(e){
      console.log(e.target.value)
   }
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("salam")
    }}>
        <input type="text" onChange={(e)=>handleChange(e)} />
        <button >Click</button>
    </form>
  )
}

export default Form