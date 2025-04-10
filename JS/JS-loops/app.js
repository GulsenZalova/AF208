// for , while , do while


// 1.  1-dən 10-a qədər rəqəmlər yazilsin.

//  start , end , how to

for(let i=0;i<=10;i++){
    //  console.log(i)
}
//  1 ,2,3,4,5,6,7,8,9,10

for(let i=10;i>0;i--){
    // console.log(i)
}


//  sum , cüt , cüt reqemlerin sayını (1-100), faktorial  


let sum=0

for(let i=1;i<=100;i++){
    // sum=sum+i
    sum+=i
}
// console.log(sum)

for(let i=0;i<=100;i+=2){
    // console.log(i)
}


let count=0
let evenSum=0
for(let i=0;i<=100;i++){
    if(i%2==0 && i!=0){
        count++
        evenSum+=i
    }
}

// console.log(count)
// console.log(evenSum)


//  5! = 5*4*3*2*1

// let num=prompt("eded daxil edin")
// let total=1

// for(let i=num;i>0;i--){
//     total=total*i

// }
// console.log(total)


// olleH
let str="Hello"
let reverseStr="olleH"

for(let i=str.length-1;i>=0;i--){
   reverseStr+=str[i]
}

// console.log(reverseStr)

// console.log(str[5])


let student1={
    name:"Mehrin",
    age:20
}

let student2={
    name:"Nermin",
    age:21
}

let student3={
    name:"Nurcan",
    age:22
}

let student4={
    name:"Sevda",
    age:23
}

// length= 4  en son indexn 3
let students=[student1,student2,student3,student4]

// ilk herfi N olan telebeler
for(let i=0;i<students.length;i++){
    // console.log(students[i].name[0])
    if(students[i].name[0]=="n" || students[i].name[0]=="N"){
        // console.log(students[i].name)
    }
}

for(let i=0;i<students.length;i++){
    // console.log(students[i].name[0])
    if(students[i].name[0].toLowerCase()=="n"){
        // console.log(students[i].name)
    }
}




// while


// istifadeye gore
// sintaksise gore

let i=6

// while(i<10){
//     // console.log(i)
//      i++
// }

// do {
//     console.log(i)
//     i++
// } while (i>5);

console.log("//////////////////////")
for(let i=0;i<10;i++){
    // console.log(i)
}


// for - dovrun bas verme sayini teqriben bilirik
// while - bir serte gore dongu bas verir

// let say=""

// while(say!="stop"){
//        say = String(prompt("say stop")).toLowerCase()
//     console.log(`You said ${say}`)
// }



let randomNum=null
let userNumber=""

while(randomNum!=userNumber){
    randomNum = Math.floor(Math.random() * 10)
    userNumber= prompt("eded daxil edin")
    console.log(`Random: ${randomNum}`)
    console.log(`User: ${userNumber}`)
}
