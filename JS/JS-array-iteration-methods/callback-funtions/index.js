
// high order functions

function calc(num1,num2,callback){
     let result=callback(num1,num2)
     return result
}

// callback function
function toplama(x,y){
   let netice=x+y
   return netice
}
function cixma(x,y){
    let netice=x-y
    return netice
 }

console.log(calc(100,150,toplama))
console.log(calc(100,150,cixma))



