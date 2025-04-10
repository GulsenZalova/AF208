// forEach


let arr=[100,6,8,9,10,7]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// elemtnt,index,arr
// arr.forEach(sayElement)

// function sayElement(value,index,arr){
//     console.log(index)
// }



let result= arr.forEach((value)=>{
    if(value>5){
        return value
    }
})


// console.log(result)





// map

// console.log(arr.forEach(x=>x))
// console.log("---------------------")
// console.log(arr.map(x=>x+5))



// find
let finded=arr.find(x=>x>5)
// let finded=arr.findLast(x=>x>5)
console.log(finded)
// filter
let filtered=arr.filter(x=>x+5)

console.log(filtered)



// some 


// let res = arr.every(x=>x>5)
// console.log(res)
let res = arr.some(x=>x>9)
console.log(res)


// reduce



let sum=arr.reduce((toplama,element)=> toplama+element,0)
console.log(sum)


// sort (numeric)



// let  sorted= arr.sort((a,b)=>b-a)

// console.log(sorted)

// sort (string)

let arrStr=["a","x",'b', "t","c",]

let  sorted= arrStr.sort((a,b)=>b.localeCompare(a))

console.log(sorted)



// object


let student1={
    name:"Aytac",
    age:28
}


let student2={
    name:"Bayram",
    age:20
}


let student3={
    name:"Ceyhun",
    age:42
}



let students=[student3,student1,student2]

let sortedStudent= students.sort((a,b)=>a.age-b.age)
console.log(students)



// Math

// Math.floor
// Math.random
// Math.raund
// Math.ceil
// toFixed
// parseInt


let num=34.5

// console.log(Math.round(num))



console.log(Math.floor(Math.random() * 10 + 5))


let basketPrice=100.9034756

// console.log(typeof basketPrice.toFixed(2))

console.log(parseInt(basketPrice))

